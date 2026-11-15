import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Layout from '../components/Layout';
import { useAuth } from '../context/AuthContext';
import api from '../services/api';

export default function CutiListPage() {
  const { user } = useAuth();
  const [cutiList, setCutiList] = useState([]);
  const [kuotaData, setKuotaData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [actionMessage, setActionMessage] = useState('');

  const isPegawai = user?.role === 'pegawai';
  const isManajer = user?.role === 'manajer';

  const fetchCuti = async () => {
    try {
      setLoading(true);
      const res = await api.get('/cuti');
      setCutiList(res.data);

      if (isPegawai) {
        try {
          const kuotaRes = await api.get('/cuti/kuota');
          setKuotaData(kuotaRes.data);
        } catch (e) {
          console.error('Error fetching kuota cuti:', e);
        }
      }
    } catch (err) {
      console.error('Error fetching cuti:', err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCuti();
  }, [isPegawai]);

  const handleUpdateStatus = async (id, status) => {
    try {
      await api.patch(`/cuti/${id}/status`, { status });
      setActionMessage(`Permohonan cuti ID #${id} berhasil di-${status.toLowerCase()}.`);
      fetchCuti();
      setTimeout(() => setActionMessage(''), 3000);
    } catch (err) {
      alert('Gagal update status cuti: ' + (err.response?.data?.detail || err.message));
    }
  };

  return (
    <Layout
      breadcrumbs={['Beranda', 'Pengajuan Cuti']}
      heroTitle="Pengajuan Cuti & Izin Kerja Pegawai PT INIX"
      heroSubtitle="Sistem alur persetujuan cuti digital terintegrasi untuk seluruh jajaran pegawai dan manajerial PT INIX."
      highlightPills={[
        '⏱️ Kuota Tahunan 12 Hari',
        '💼 Alur Persetujuan Manajerial',
        '📋 Status Realtime'
      ]}
    >
      {/* Banner Kuota Cuti Tahunan untuk Pegawai */}
      {isPegawai && kuotaData && (
        <section
          style={{
            background: '#ffffff',
            border: '1px solid #e8edf5',
            borderRadius: '8px',
            padding: '1.25rem 1.5rem',
            marginBottom: '1.5rem',
            boxShadow: '0 4px 15px rgba(32,78,207,0.07)',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: '1rem'
          }}
          aria-label="Ringkasan Kuota Cuti Tahunan"
        >
          <div>
            <h3 style={{ fontSize: '1.05rem', fontWeight: 700, color: '#162447', marginBottom: '0.25rem' }}>
              Informasi Kuota Cuti Tahunan ({kuotaData.tahun})
            </h3>
            <p style={{ fontSize: '0.85rem', color: '#64748b' }}>
              Setiap pegawai berhak atas kuota cuti tahunan reguler sejumlah 12 hari kerja per tahun.
            </p>
          </div>

          <div style={{ display: 'flex', gap: '1.25rem', alignItems: 'center' }}>
            <div style={{ textAlign: 'center' }}>
              <span style={{ display: 'block', fontSize: '0.75rem', color: '#64748b', fontWeight: 600 }}>KUOTA RESMI</span>
              <strong style={{ fontSize: '1.3rem', color: '#162447' }} data-testid="kuota-tahunan">
                {kuotaData.kuota_tahunan} Hari
              </strong>
            </div>

            <div style={{ textAlign: 'center' }}>
              <span style={{ display: 'block', fontSize: '0.75rem', color: '#64748b', fontWeight: 600 }}>TERPAKAI</span>
              <strong style={{ fontSize: '1.3rem', color: '#16a34a' }}>
                {kuotaData.cuti_approved_hari} Hari
              </strong>
            </div>

            <div style={{ textAlign: 'center' }}>
              <span style={{ display: 'block', fontSize: '0.75rem', color: '#64748b', fontWeight: 600 }}>PENDING</span>
              <strong style={{ fontSize: '1.3rem', color: '#ff7a00' }}>
                {kuotaData.cuti_pending_hari} Hari
              </strong>
            </div>

            <div style={{ textAlign: 'center', background: '#eff6ff', padding: '6px 14px', borderRadius: '6px', border: '1px solid #bfdbfe' }}>
              <span style={{ display: 'block', fontSize: '0.75rem', color: '#1e40af', fontWeight: 700 }}>SISA KUOTA</span>
              <strong style={{ fontSize: '1.35rem', color: '#204ecf' }} data-testid="sisa-kuota-cuti">
                {kuotaData.sisa_kuota} Hari
              </strong>
            </div>
          </div>
        </section>
      )}

      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem', flexWrap: 'wrap', gap: '1rem' }}>
        <div>
          <h2 style={{ fontSize: '1.25rem', fontWeight: 700, color: '#162447' }}>Daftar Permohonan Cuti</h2>
          <p style={{ fontSize: '0.85rem', color: '#6b7280' }}>
            {isPegawai ? 'Menampilkan riwayat cuti yang Anda ajukan' : 'Menampilkan seluruh permohonan cuti pegawai'}
          </p>
        </div>

        {isPegawai && (
          <Link to="/cuti/ajukan" className="btn-primary" data-testid="btn-ajukan-cuti">
            + Ajukan Cuti Baru
          </Link>
        )}
      </div>

      {actionMessage && (
        <div className="alert-box alert-success" role="alert" style={{ marginBottom: '1.5rem' }}>
          {actionMessage}
        </div>
      )}

      {loading ? (
        <div style={{ padding: '2rem', textAlign: 'center' }}>Memuat daftar cuti...</div>
      ) : cutiList.length === 0 ? (
        <div style={{ background: '#ffffff', padding: '3rem', textAlign: 'center', borderRadius: '8px', border: '1px solid #e8edf5' }}>
          <p style={{ color: '#64748b' }}>Belum ada permohonan cuti yang tercatat.</p>
        </div>
      ) : (
        <div className="table-responsive">
          <table className="eduparx-table" data-testid="cuti-table">
            <thead>
              <tr>
                <th scope="col">ID</th>
                <th scope="col">Nama Pegawai</th>
                <th scope="col">Tanggal Mulai</th>
                <th scope="col">Tanggal Selesai</th>
                <th scope="col">Alasan</th>
                <th scope="col">Status</th>
                {isManajer && <th scope="col" style={{ textAlign: 'center' }}>Tindakan Manajer</th>}
              </tr>
            </thead>
            <tbody>
              {cutiList.map((item) => (
                <tr key={item.id}>
                  <td><strong>#{item.id}</strong></td>
                  <td>
                    {item.Pegawai ? (
                      <div>
                        <strong>{item.Pegawai.nama_lengkap}</strong>
                        <div style={{ fontSize: '0.75rem', color: '#64748b' }}>{item.Pegawai.nip}</div>
                      </div>
                    ) : (
                      'Pegawai'
                    )}
                  </td>
                  <td>{item.tgl_mulai}</td>
                  <td>{item.tgl_selesai}</td>
                  <td>{item.alasan}</td>
                  <td>
                    <span className={`badge-status badge-${item.status.toLowerCase()}`}>
                      {item.status}
                    </span>
                  </td>
                  {isManajer && (
                    <td style={{ textAlign: 'center' }}>
                      {item.status === 'PENDING' ? (
                        <div style={{ display: 'inline-flex', gap: '0.5rem' }}>
                          <button
                            type="button"
                            className="btn-action-sm btn-approve"
                            onClick={() => handleUpdateStatus(item.id, 'APPROVED')}
                            data-testid={`btn-approve-${item.id}`}
                          >
                            Setujui
                          </button>
                          <button
                            type="button"
                            className="btn-action-sm btn-reject"
                            onClick={() => handleUpdateStatus(item.id, 'REJECTED')}
                            data-testid={`btn-reject-${item.id}`}
                          >
                            Tolak
                          </button>
                        </div>
                      ) : (
                        <span style={{ fontSize: '0.8rem', color: '#94a3b8' }}>Selesai Diproses</span>
                      )}
                    </td>
                  )}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </Layout>
  );
}
