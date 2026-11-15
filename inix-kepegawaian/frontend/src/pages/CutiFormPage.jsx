import React, { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import Layout from '../components/Layout';
import api from '../services/api';

export default function CutiFormPage() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    tgl_mulai: '',
    tgl_selesai: '',
    alasan: ''
  });

  const [kuotaInfo, setKuotaInfo] = useState(null);
  const [durasiHari, setDurasiHari] = useState(0);
  const [error, setError] = useState('');
  const [submitting, setSubmitting] = useState(false);

  useEffect(() => {
    async function loadKuota() {
      try {
        const res = await api.get('/cuti/kuota');
        setKuotaInfo(res.data);
      } catch (err) {
        console.error('Gagal memuat kuota cuti:', err);
      }
    }
    loadKuota();
  }, []);

  // Hitung durasi hari secara realtime
  useEffect(() => {
    if (formData.tgl_mulai && formData.tgl_selesai) {
      const start = new Date(formData.tgl_mulai);
      const end = new Date(formData.tgl_selesai);
      if (end >= start) {
        const diffTime = Math.abs(end - start);
        const days = Math.ceil(diffTime / (1000 * 60 * 60 * 24)) + 1;
        setDurasiHari(days);
      } else {
        setDurasiHari(0);
      }
    } else {
      setDurasiHari(0);
    }
  }, [formData.tgl_mulai, formData.tgl_selesai]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    if (!formData.tgl_mulai || !formData.tgl_selesai || !formData.alasan) {
      setError('Tanggal mulai, tanggal selesai, dan alasan wajib diisi');
      return;
    }

    if (new Date(formData.tgl_selesai) < new Date(formData.tgl_mulai)) {
      setError('Tanggal selesai tidak boleh lebih awal dari tanggal mulai');
      return;
    }

    if (formData.alasan.trim().length < 3) {
      setError('Alasan cuti minimal harus 3 karakter');
      return;
    }

    if (kuotaInfo && durasiHari > kuotaInfo.sisa_kuota) {
      setError(`Durasi pengajuan (${durasiHari} hari) melebihi sisa kuota cuti tahunan Anda (${kuotaInfo.sisa_kuota} hari dari total 12 hari).`);
      return;
    }

    try {
      setSubmitting(true);
      await api.post('/cuti', formData);
      navigate('/cuti');
    } catch (err) {
      setError(err.response?.data?.detail || 'Gagal mengajukan cuti.');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <Layout
      breadcrumbs={['Beranda', 'Pengajuan Cuti', 'Form Pengajuan']}
      heroTitle="Formulir Pengajuan Cuti Pegawai"
      heroSubtitle="Tentukan rentang tanggal dan alasan permohonan cuti untuk ditinjau oleh Manajer."
    >
      <div className="form-card">
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '0.75rem', marginBottom: '1.5rem' }}>
          <div>
            <h2 style={{ fontSize: '1.25rem', fontWeight: 700, color: '#162447', marginBottom: '0.25rem' }}>
              Pengajuan Permohonan Cuti Baru
            </h2>
            <p style={{ fontSize: '0.85rem', color: '#64748b' }}>
              Standar hak cuti tahunan reguler: 12 hari kerja per tahun
            </p>
          </div>

          {kuotaInfo && (
            <div style={{ background: '#eff6ff', border: '1px solid #bfdbfe', borderRadius: '6px', padding: '6px 12px', textAlign: 'right' }}>
              <span style={{ fontSize: '0.75rem', color: '#1e40af', display: 'block', fontWeight: 600 }}>SISA KUOTA TAHUNAN</span>
              <strong style={{ fontSize: '1.1rem', color: '#204ecf' }} data-testid="sisa-kuota-cuti">
                {kuotaInfo.sisa_kuota} / {kuotaInfo.kuota_tahunan || 12} Hari
              </strong>
            </div>
          )}
        </div>

        {error && (
          <div className="alert-box alert-error" role="alert" data-testid="validation-error">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit} noValidate>
          <div className="form-group">
            <label htmlFor="tgl_mulai" className="form-label">Tanggal Mulai Cuti</label>
            <input
              id="tgl_mulai"
              name="tgl_mulai"
              type="date"
              className="form-control"
              value={formData.tgl_mulai}
              onChange={handleChange}
              data-testid="input-tgl-mulai"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="tgl_selesai" className="form-label">Tanggal Selesai Cuti</label>
            <input
              id="tgl_selesai"
              name="tgl_selesai"
              type="date"
              className="form-control"
              value={formData.tgl_selesai}
              onChange={handleChange}
              data-testid="input-tgl-selesai"
              required
            />
          </div>

          {durasiHari > 0 && (
            <div style={{ background: '#f8fafc', padding: '8px 12px', borderRadius: '6px', border: '1px solid #e2e8f0', marginBottom: '1.25rem', fontSize: '0.85rem', display: 'flex', justifyContent: 'space-between' }}>
              <span>Estimasi Durasi Cuti:</span>
              <strong style={{ color: kuotaInfo && durasiHari > kuotaInfo.sisa_kuota ? '#dc2626' : '#204ecf' }} data-testid="durasi-cuti">
                {durasiHari} Hari Kerja
              </strong>
            </div>
          )}

          <div className="form-group">
            <label htmlFor="alasan" className="form-label">Alasan / Keperluan Cuti</label>
            <textarea
              id="alasan"
              name="alasan"
              rows={4}
              className="form-control"
              placeholder="Jelaskan alasan permohonan cuti Anda secara jelas..."
              value={formData.alasan}
              onChange={handleChange}
              data-testid="input-alasan"
              required
            />
          </div>

          <div className="form-actions">
            <Link to="/cuti" className="btn-secondary">
              Batal
            </Link>
            <button
              type="submit"
              className="btn-primary"
              disabled={submitting}
              data-testid="btn-submit-cuti"
            >
              {submitting ? 'Mengirim...' : 'Kirim Pengajuan Cuti'}
            </button>
          </div>
        </form>
      </div>
    </Layout>
  );
}
