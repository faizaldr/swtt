import jwt from 'jsonwebtoken';

export function authMiddleware(req, res, next) {
  const authHeader = req.headers['authorization'];
  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    return res.status(401).json({ detail: 'Token tidak ditemukan' });
  }

  const token = authHeader.split(' ')[1];
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET || 'inix-jwt-secret-key-for-testing');
    req.user = decoded; // { user_id, username, role, iat, exp }
    next();
  } catch (err) {
    if (err.name === 'TokenExpiredError') {
      return res.status(401).json({ detail: 'Token sudah kedaluwarsa' });
    }
    return res.status(401).json({ detail: 'Token tidak valid' });
  }
}

export default authMiddleware;
