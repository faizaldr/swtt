import React from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

export default function Navbar() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  const isActive = (path) => location.pathname === path;

  return (
    <header className="eduparx-navbar">
      <div className="nav-container">
        {/* Brand / Logo */}
        <Link to="/dashboard" className="brand-logo" aria-label="Beranda INIX Eduparx">
          <span className="brand-primary">INIXINDO</span>
          <span className="brand-divider">|</span>
          <span className="brand-secondary">Eduparx</span>
          <span className="brand-badge">HR Portal</span>
        </Link>

        {/* Global Navigation Links */}
        <nav className="nav-links" aria-label="Navigasi Utama">
          <Link to="/dashboard" className={`nav-link ${isActive('/dashboard') ? 'active' : ''}`}>
            Beranda
          </Link>
          <Link to="/pegawai" className={`nav-link ${isActive('/pegawai') ? 'active' : ''}`}>
            Katalog Pegawai
          </Link>
          <Link to="/cuti" className={`nav-link ${isActive('/cuti') ? 'active' : ''}`}>
            Pengajuan Cuti
          </Link>
        </nav>

        {/* User Greeting & Logout */}
        <div className="nav-user-actions">
          {user ? (
            <div className="user-profile-badge">
              <span className="user-avatar" aria-hidden="true">
                {user.username.charAt(0).toUpperCase()}
              </span>
              <div className="user-meta">
                <span className="user-name">{user.username}</span>
                <span className={`role-pill role-${user.role}`}>{user.role.toUpperCase()}</span>
              </div>
              <button
                type="button"
                className="btn-logout"
                onClick={handleLogout}
                data-testid="btn-logout"
                aria-label="Logout dari aplikasi"
              >
                Keluar
              </button>
            </div>
          ) : (
            <Link to="/login" className="btn-primary-sm">
              Masuk
            </Link>
          )}
        </div>
      </div>
    </header>
  );
}
