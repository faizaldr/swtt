import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { User } from '../models/index.js';

export async function login(req, res) {
  try {
    const { username, password } = req.body;
    if (!username || !password) {
      return res.status(400).json({ detail: 'Username dan password wajib diisi' });
    }

    const user = await User.findOne({ where: { username } });
    if (!user) {
      return res.status(401).json({ detail: 'Username atau password salah' });
    }

    if (!user.is_active) {
      return res.status(403).json({ detail: 'Akun tidak aktif' });
    }

    const isValid = await bcrypt.compare(password, user.password);
    if (!isValid) {
      return res.status(401).json({ detail: 'Username atau password salah' });
    }

    const secret = process.env.JWT_SECRET || 'inix-jwt-secret-key-for-testing';
    const access_token = jwt.sign(
      { user_id: user.id, username: user.username, role: user.role },
      secret,
      { expiresIn: process.env.JWT_EXPIRY || '15m' }
    );

    const refresh_token = jwt.sign(
      { user_id: user.id },
      secret,
      { expiresIn: process.env.JWT_REFRESH_EXPIRY || '7d' }
    );

    return res.status(200).json({
      access_token,
      refresh_token,
      user: {
        id: user.id,
        username: user.username,
        role: user.role
      }
    });
  } catch (error) {
    console.error('Login error:', error);
    return res.status(500).json({ detail: 'Internal server error' });
  }
}

export async function refresh(req, res) {
  try {
    const { refresh_token } = req.body;
    if (!refresh_token) {
      return res.status(400).json({ detail: 'Refresh token wajib diisi' });
    }

    const secret = process.env.JWT_SECRET || 'inix-jwt-secret-key-for-testing';
    let decoded;
    try {
      decoded = jwt.verify(refresh_token, secret);
    } catch {
      return res.status(401).json({ detail: 'Refresh token tidak valid' });
    }

    const user = await User.findByPk(decoded.user_id);
    if (!user || !user.is_active) {
      return res.status(401).json({ detail: 'User tidak ditemukan atau nonaktif' });
    }

    const access_token = jwt.sign(
      { user_id: user.id, username: user.username, role: user.role },
      secret,
      { expiresIn: process.env.JWT_EXPIRY || '15m' }
    );

    return res.status(200).json({ access_token });
  } catch (error) {
    console.error('Refresh token error:', error);
    return res.status(500).json({ detail: 'Internal server error' });
  }
}

export default { login, refresh };
