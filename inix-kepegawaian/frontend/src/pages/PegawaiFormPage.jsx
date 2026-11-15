import React, { useState, useEffect } from 'react';
import { useNavigate, useParams, Link } from 'react-router-dom';
import Layout from '../components/Layout';
import api from '../services/api';

export default function PegawaiFormPage() {
  const { id } = useParams();
  const isEdit = Boolean(id);
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    nip: '',
    nama_lengkap: '',
    jabatan: '',
    status: 'aktif',
    user_id: ''
  });

  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [submitting, setSubmitting] = useState(false);
  const [loading, setLoading] = useState(isEdit);

  useEffect(() => {
    if (isEdit) {
      async function fetchDetail() {
        try {
          const res = await api.get(`/pegawai/${id}`);
          const { nip, nama_lengkap, jabatan, status, user_id } = res.data;
          setFormData({
            nip: nip || '',
            nama_lengkap: nama_lengkap || '',
            jabatan: jabatan || '',
            status: status || 'aktif',
            user_id: user_id || ''
          });
        } catch (err) {
          setError('Gagal memuat data pegawai: ' + (err.response?.data?.detail || err.message));
        } finally {
          setLoading(false);
        }
      }
      fetchDetail();
    }
  }, [id, isEdit]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setSuccess('');

    // Validasi
    if (!formData.nip || !formData.nama_lengkap || !formData.jabatan) {
      setError('NIP, Nama Lengkap, dan Jabatan wajib diisi');
      return;
    }

    try {
      setSubmitting(true);
      const payload = {
        ...formData,
        user_id: formData.user_id ? parseInt(formData.user_id, 10) : null
      };

      if (isEdit) {
        await api.put(`/pegawai/${id}`, payload);
        setSuccess('Data pegawai berhasil diperbarui.');
      } else {
        await api.post('/pegawai', payload);
        setSuccess('Pegawai baru berhasil ditambahkan.');
      }

      setTimeout(() => {
        navigate('/pegawai');
      }, 1200);
    } catch (err) {
      setError(err.response?.data?.detail || 'Terjadi kesalahan saat menyimpan data pegawai.');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <Layout
      breadcrumbs={['Beranda', 'Katalog Pegawai', isEdit ? 'Edit Pegawai' : 'Tambah Pegawai']}
      heroTitle={isEdit ? 'Ubah Data Pegawai' : 'Form Registrasi Pegawai'}
      heroSubtitle="Lengkapi data profil talenta sesuai format standar identitas kepegawaian PT INIX."
    >
      <div className="form-card">
        <h2 style={{ fontSize: '1.25rem', fontWeight: 700, marginBottom: '1.5rem', color: '#162447' }}>
          {isEdit ? `Edit Pegawai (ID: ${id})` : 'Tambah Data Pegawai Baru'}
        </h2>

        {error && (
          <div className="alert-box alert-error" role="alert" data-testid="form-error">
            {error}
          </div>
        )}

        {success && (
          <div className="alert-box alert-success" role="alert" data-testid="success-message">
            {success}
          </div>
        )}

        {loading ? (
          <p>Memuat data formulir...</p>
        ) : (
          <form onSubmit={handleSubmit} noValidate>
            <div className="form-group">
              <label htmlFor="nip" className="form-label">Nomor Induk Pegawai (NIP)</label>
              <input
                id="nip"
                name="nip"
                type="text"
                className="form-control"
                placeholder="contoh: NIP-2025-006"
                value={formData.nip}
                onChange={handleChange}
                data-testid="input-nip"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="nama_lengkap" className="form-label">Nama Lengkap</label>
              <input
                id="nama_lengkap"
                name="nama_lengkap"
                type="text"
                className="form-control"
                placeholder="contoh: Dimas Pratama"
                value={formData.nama_lengkap}
                onChange={handleChange}
                data-testid="input-nama"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="jabatan" className="form-label">Jabatan / Spesialisasi</label>
              <input
                id="jabatan"
                name="jabatan"
                type="text"
                className="form-control"
                placeholder="contoh: AI Engineer / QA Automation"
                value={formData.jabatan}
                onChange={handleChange}
                data-testid="input-jabatan"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="status" className="form-label">Status Keaktifan</label>
              <select
                id="status"
                name="status"
                className="form-control"
                value={formData.status}
                onChange={handleChange}
                data-testid="select-status"
              >
                <option value="aktif">Aktif</option>
                <option value="nonaktif">Nonaktif</option>
              </select>
            </div>

            <div className="form-actions">
              <Link to="/pegawai" className="btn-secondary" data-testid="btn-batal">
                Batal
              </Link>
              <button
                type="submit"
                className="btn-primary"
                disabled={submitting}
                data-testid="btn-simpan"
              >
                {submitting ? 'Menyimpan...' : 'Simpan Data Pegawai'}
              </button>
            </div>
          </form>
        )}
      </div>
    </Layout>
  );
}
