import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Layout from '../components/Layout';
import { useAuth } from '../context/AuthContext';
import api from '../services/api';

export default function DashboardPage() {
  const { user } = useAuth();
  const [totalPegawai, setTotalPegawai] = useState(0);
  const [cutiPending, setCutiPending] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchDashboardData() {
      try {
        const [pegawaiRes, cutiRes] = await Promise.all([
          api.get('/pegawai'),
          api.get('/cuti')
        ]);
        setTotalPegawai(pegawaiRes.data.length || 0);
        const pendingCount = (cutiRes.data || []).filter(c => c.status === 'PENDING').length;
        setCutiPending(pendingCount);
      } catch (err) {
        console.error('Error fetching dashboard stats:', err);
      } finally {
        setLoading(false);
      }
    }
    fetchDashboardData();
  }, []);

  return (
    <Layout
      breadcrumbs={['Beranda', 'Dashboard']}
      heroTitle={`Selamat datang, ${user?.username || 'Rekan INIX'}!`}
      heroSubtitle="Pusat pengelolaan SDM internal, akselerasi talenta AI Engineer, dan persetujuan pengajuan cuti PT INIX."
      highlightPills={[
        '⭐ INIX Learning Culture',
        '💼 Internal HR & Talent Management',
        '🚀 Continuous Training Program'
      ]}
    >
      <div style={{ marginBottom: '2rem' }}>
        <p data-testid="welcome-msg" style={{ fontSize: '1.1rem', color: '#4b5563' }}>
          Anda terhubung dengan role: <strong style={{ color: '#204ecf' }}>{user?.role?.toUpperCase()}</strong>
        </p>
      </div>

      {/* Summary Cards */}
      <section className="dashboard-metrics-grid">
        <div className="metric-card">
          <span className="metric-card-title">TOTAL DATA TALENTA</span>
          <div className="metric-card-value">{loading ? '...' : totalPegawai}</div>
          <span className="metric-card-desc">Pegawai terdaftar dalam database</span>
          <div style={{ marginTop: '1rem' }}>
            <Link to="/pegawai" className="btn-primary-sm">Lihat Katalog Pegawai →</Link>
          </div>
        </div>

        <div className="metric-card">
          <span className="metric-card-title">CUTI MENUNGGU TINJAUAN</span>
          <div className="metric-card-value" style={{ color: '#ff7a00' }}>{loading ? '...' : cutiPending}</div>
          <span className="metric-card-desc">Pengajuan berstatus PENDING</span>
          <div style={{ marginTop: '1rem' }}>
            <Link to="/cuti" className="btn-primary-sm" style={{ background: '#ff7a00' }}>Tinjau Pengajuan Cuti →</Link>
          </div>
        </div>

        <div className="metric-card">
          <span className="metric-card-title">PROGRAM PELATIHAN TERPILIH</span>
          <div className="metric-card-value" style={{ color: '#16a34a' }}>32 JP</div>
          <span className="metric-card-desc">AI Engineer & QA Automation Bootcamp</span>
          <div style={{ marginTop: '1rem' }}>
            <span className="badge-status badge-approved">Kurikulum Terverifikasi</span>
          </div>
        </div>
      </section>

      {/* Info Section */}
      <section style={{ background: '#ffffff', border: '1px solid #e8edf5', borderRadius: '8px', padding: '1.5rem', boxShadow: '0 4px 15px rgba(32,78,207,0.07)' }}>
        <h2 style={{ fontSize: '1.15rem', fontWeight: 700, marginBottom: '0.75rem' }}>Panduan Pengujian Sistem Kepegawaian</h2>
        <p style={{ color: '#4b5563', fontSize: '0.9rem', lineHeight: 1.6 }}>
          Aplikasi ini dirancang sebagai instrumen pengujian Software Testing komprehensif. Pastikan seluruh interaksi tombol form, validasi NIP, pembuatan data pegawai, verifikasi persetujuan cuti Manajer, dan pengujian beban API (k6) serta scan keamanan (OWASP ZAP) dilakukan sesuai skenario pelatihan.
        </p>
      </section>
    </Layout>
  );
}
