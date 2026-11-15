import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import ProtectedRoute from './components/ProtectedRoute';

import LoginPage from './pages/LoginPage';
import DashboardPage from './pages/DashboardPage';
import PegawaiListPage from './pages/PegawaiListPage';
import PegawaiFormPage from './pages/PegawaiFormPage';
import CutiListPage from './pages/CutiListPage';
import CutiFormPage from './pages/CutiFormPage';

export default function App() {
  return (
    <AuthProvider>
      <Routes>
        {/* Public Routes */}
        <Route path="/login" element={<LoginPage />} />

        {/* Protected Routes */}
        <Route element={<ProtectedRoute />}>
          <Route path="/" element={<Navigate to="/dashboard" replace />} />
          <Route path="/dashboard" element={<DashboardPage />} />
          <Route path="/pegawai" element={<PegawaiListPage />} />
          <Route path="/pegawai/tambah" element={<PegawaiFormPage />} />
          <Route path="/pegawai/edit/:id" element={<PegawaiFormPage />} />
          <Route path="/cuti" element={<CutiListPage />} />
          <Route path="/cuti/ajukan" element={<CutiFormPage />} />
        </Route>

        {/* Fallback */}
        <Route path="*" element={<Navigate to="/dashboard" replace />} />
      </Routes>
    </AuthProvider>
  );
}
