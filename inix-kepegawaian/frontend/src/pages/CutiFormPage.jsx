import React, { useState } from 'react';
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

  const [error, setError] = useState('');
  const [submitting, setSubmitting] = useState(false);

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
        <h2 style={{ fontSize: '1.25rem', fontWeight: 700, marginBottom: '1.5rem', color: '#162447' }}>
          Pengajuan Permohonan Cuti Baru
        </h2>

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
