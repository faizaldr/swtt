import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

export default function LoginPage() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [submitting, setSubmitting] = useState(false);

  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    if (!username || !password) {
      setError('Username dan password wajib diisi');
      return;
    }

    try {
      setSubmitting(true);
      await login(username, password);
      navigate('/dashboard');
    } catch (err) {
      const msg = err.response?.data?.detail || 'Gagal masuk. Periksa kembali username dan password.';
      setError(msg);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#f8fafd', padding: '1.5rem' }}>
      <div className="form-card" style={{ width: '100%', maxWidth: '420px', padding: '2.5rem 2rem' }}>
        <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', fontWeight: 800, fontSize: '1.4rem', marginBottom: '0.5rem' }}>
            <span style={{ color: '#162447' }}>INIXINDO</span>
            <span style={{ color: '#cbd5e1' }}>|</span>
            <span style={{ color: '#038fde' }}>Eduparx</span>
          </div>
          <h1 style={{ fontSize: '1.25rem', fontWeight: 700, color: '#262d3d' }}>Portal Kepegawaian & Training</h1>
          <p style={{ fontSize: '0.85rem', color: '#6b7280' }}>Masuk dengan kredensial akun INIX Anda</p>
        </div>

        {error && (
          <div className="alert-box alert-error" role="alert" data-testid="error-message">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit} noValidate>
          <div className="form-group">
            <label htmlFor="username" className="form-label">Email / Username</label>
            <input
              id="username"
              type="text"
              className="form-control"
              placeholder="contoh: pegawai@inix.com"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              data-testid="input-username"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="password" className="form-label">Password</label>
            <input
              id="password"
              type="password"
              className="form-control"
              placeholder="••••••••"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              data-testid="input-password"
              required
            />
          </div>

          <button
            type="submit"
            className="btn-primary"
            style={{ width: '100%', justifyContent: 'center', padding: '10px', marginTop: '0.5rem' }}
            disabled={submitting}
            data-testid="btn-login"
          >
            {submitting ? 'Memproses...' : 'Login ke Portal'}
          </button>
        </form>

        <div style={{ marginTop: '1.75rem', paddingTop: '1.25rem', borderTop: '1px solid #e8edf5', fontSize: '0.78rem', color: '#64748b' }}>
          <strong>Akun Uji Demo:</strong><br />
          Admin: <code>admin@inix.com</code> / <code>Admin@123!</code><br />
          HR: <code>hr@inix.com</code> / <code>Hr@123!</code><br />
          Manajer: <code>manager@inix.com</code> / <code>Manager@123!</code><br />
          Pegawai: <code>pegawai@inix.com</code> / <code>Pegawai@123!</code>
        </div>
      </div>
    </div>
  );
}
