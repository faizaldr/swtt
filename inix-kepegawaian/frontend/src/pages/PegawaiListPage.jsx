import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Layout from '../components/Layout';
import ConfirmDialog from '../components/ConfirmDialog';
import { useAuth } from '../context/AuthContext';
import api from '../services/api';

export default function PegawaiListPage() {
  const { user } = useAuth();
  const [pegawaiList, setPegawaiList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedRoleFilter, setSelectedRoleFilter] = useState('ALL');
  const [selectedStatusFilter, setSelectedStatusFilter] = useState('ALL');
  const [viewMode, setViewMode] = useState('grid'); // 'grid' atau 'table'

  // Confirm delete dialog state
  const [deleteId, setDeleteId] = useState(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const canManage = ['admin', 'hr'].includes(user?.role);
  const canDelete = user?.role === 'admin';

  const fetchPegawai = async () => {
    try {
      setLoading(true);
      const res = await api.get('/pegawai');
      setPegawaiList(res.data);
    } catch (err) {
      console.error('Error fetching pegawai:', err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPegawai();
  }, []);

  const handleDeleteClick = (id) => {
    setDeleteId(id);
    setIsDialogOpen(true);
  };

  const handleConfirmDelete = async () => {
    try {
      if (deleteId) {
        await api.delete(`/pegawai/${deleteId}`);
        setIsDialogOpen(false);
        setDeleteId(null);
        fetchPegawai();
      }
    } catch (err) {
      console.error('Gagal menghapus data pegawai:', err);
      alert('Gagal menghapus data pegawai: ' + (err.response?.data?.detail || err.message));
    }
  };

  // Filter client-side
  const filteredList = pegawaiList.filter((item) => {
    const matchSearch =
      item.nama_lengkap.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.nip.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.jabatan.toLowerCase().includes(searchTerm.toLowerCase());

    const matchRole =
      selectedRoleFilter === 'ALL' ||
      (selectedRoleFilter === 'AI' && item.jabatan.toLowerCase().includes('ai')) ||
      (selectedRoleFilter === 'QA' && item.jabatan.toLowerCase().includes('qa')) ||
      (selectedRoleFilter === 'HR' && item.jabatan.toLowerCase().includes('hr')) ||
      (selectedRoleFilter === 'MANAJER' && item.jabatan.toLowerCase().includes('manajer'));

    const matchStatus =
      selectedStatusFilter === 'ALL' || item.status === selectedStatusFilter;

    return matchSearch && matchRole && matchStatus;
  });

  return (
    <Layout
      breadcrumbs={['Beranda', 'Katalog Pegawai & Talenta']}
      heroTitle="Katalog Talenta & Pegawai PT INIX"
      heroSubtitle="Direktori talenta kompetensi AI Engineer, Software QA Automation, Cloud, dan tim manajerial PT Inixindo."
      highlightPills={[
        '⭐ 520+ Talenta IT Terlatih',
        '🎯 Specialization: AI & QA Engineering',
        '💼 Inixindo Internal Directory'
      ]}
    >
      <div className="catalog-layout">
        {/* KIRI: Sidebar Filter Eduparx */}
        <aside className="catalog-filter-box" aria-label="Filter Katalog">
          <h2 className="filter-title">Filter Direktori</h2>

          {/* Search box */}
          <div className="filter-group">
            <label htmlFor="search-pegawai" className="filter-label">Cari Pegawai / NIP</label>
            <input
              id="search-pegawai"
              type="text"
              className="filter-input"
              placeholder="Cari nama, NIP, jabatan..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              data-testid="search-pegawai"
            />
          </div>

          {/* Kategori Bidang / Jabatan */}
          <div className="filter-group">
            <span className="filter-label">Kategori Spesialisasi</span>
            <div className="filter-pill-list">
              <button
                type="button"
                className={`filter-pill-item ${selectedRoleFilter === 'ALL' ? 'active' : ''}`}
                onClick={() => setSelectedRoleFilter('ALL')}
              >
                Semua Bidang <span>{pegawaiList.length}</span>
              </button>
              <button
                type="button"
                className={`filter-pill-item ${selectedRoleFilter === 'AI' ? 'active' : ''}`}
                onClick={() => setSelectedRoleFilter('AI')}
              >
                AI & Data Science <span>•</span>
              </button>
              <button
                type="button"
                className={`filter-pill-item ${selectedRoleFilter === 'QA' ? 'active' : ''}`}
                onClick={() => setSelectedRoleFilter('QA')}
              >
                QA & Test Automation <span>•</span>
              </button>
              <button
                type="button"
                className={`filter-pill-item ${selectedRoleFilter === 'HR' ? 'active' : ''}`}
                onClick={() => setSelectedRoleFilter('HR')}
              >
                Staff HR & Admin <span>•</span>
              </button>
              <button
                type="button"
                className={`filter-pill-item ${selectedRoleFilter === 'MANAJER' ? 'active' : ''}`}
                onClick={() => setSelectedRoleFilter('MANAJER')}
              >
                Manajer IT <span>•</span>
              </button>
            </div>
          </div>

          {/* Status Pegawai */}
          <div className="filter-group">
            <span className="filter-label">Status Keaktifan</span>
            <div className="filter-pill-list">
              <button
                type="button"
                className={`filter-pill-item ${selectedStatusFilter === 'ALL' ? 'active' : ''}`}
                onClick={() => setSelectedStatusFilter('ALL')}
              >
                Semua Status
              </button>
              <button
                type="button"
                className={`filter-pill-item ${selectedStatusFilter === 'aktif' ? 'active' : ''}`}
                onClick={() => setSelectedStatusFilter('aktif')}
              >
                Aktif
              </button>
              <button
                type="button"
                className={`filter-pill-item ${selectedStatusFilter === 'nonaktif' ? 'active' : ''}`}
                onClick={() => setSelectedStatusFilter('nonaktif')}
              >
                Nonaktif
              </button>
            </div>
          </div>

          <button
            type="button"
            className="btn-reset-filter"
            onClick={() => {
              setSearchTerm('');
              setSelectedRoleFilter('ALL');
              setSelectedStatusFilter('ALL');
            }}
          >
            Reset Filter
          </button>
        </aside>

        {/* KANAN: Area Konten (Card Grid & Table) */}
        <section className="catalog-content-area" aria-label="Daftar Data Pegawai">
          <div className="catalog-content-header">
            <div className="content-counter">
              Menampilkan <strong>{filteredList.length}</strong> data talenta
            </div>

            <div className="content-actions">
              {/* Toggle Tampilan */}
              <button
                type="button"
                className={`toggle-view-btn ${viewMode === 'grid' ? 'active' : ''}`}
                onClick={() => setViewMode('grid')}
                aria-label="Tampilan Kartu"
              >
                ▦ Grid Card
              </button>
              <button
                type="button"
                className={`toggle-view-btn ${viewMode === 'table' ? 'active' : ''}`}
                onClick={() => setViewMode('table')}
                aria-label="Tampilan Tabel"
              >
                ☰ Data Table
              </button>

              {canManage && (
                <Link to="/pegawai/tambah" className="btn-primary" data-testid="btn-tambah">
                  + Tambah Pegawai
                </Link>
              )}
            </div>
          </div>

          {loading ? (
            <div style={{ padding: '2rem', textAlign: 'center' }}>Memuat data...</div>
          ) : filteredList.length === 0 ? (
            <div style={{ background: '#ffffff', padding: '3rem', textAlign: 'center', borderRadius: '8px', border: '1px solid #e8edf5' }}>
              <p style={{ color: '#64748b' }}>Tidak ada data pegawai yang sesuai dengan filter pencarian.</p>
            </div>
          ) : viewMode === 'grid' ? (
            /* Card Grid View khas Eduparx */
            <div className="eduparx-card-grid">
              {filteredList.map((item) => (
                <article key={item.id} className="course-card">
                  <div className="card-header-banner">
                    <span className="card-category-pill">{item.nip}</span>
                    <h3 className="card-title">{item.nama_lengkap}</h3>
                  </div>

                  <div className="card-body">
                    <div className="card-meta-row">
                      <span>Jabatan:</span>
                      <strong style={{ color: '#204ecf' }}>{item.jabatan}</strong>
                    </div>

                    <div className="card-meta-row">
                      <span>Status:</span>
                      <span className={`badge-status badge-${item.status}`}>
                        {item.status.toUpperCase()}
                      </span>
                    </div>

                    <div className="card-meta-row">
                      <span>Akun User:</span>
                      <span>{item.User?.username || 'Belum ditautkan'}</span>
                    </div>

                    {(canManage || canDelete) && (
                      <div className="card-actions">
                        {canManage && (
                          <Link
                            to={`/pegawai/edit/${item.id}`}
                            className="btn-action-sm btn-edit"
                            data-testid={`btn-edit-${item.id}`}
                          >
                            Edit
                          </Link>
                        )}
                        {canDelete && (
                          <button
                            type="button"
                            className="btn-action-sm btn-delete"
                            onClick={() => handleDeleteClick(item.id)}
                            data-testid={`btn-delete-${item.id}`}
                          >
                            Hapus
                          </button>
                        )}
                      </div>
                    )}
                  </div>
                </article>
              ))}
            </div>
          ) : (
            /* Table View Semantic untuk Pengujian Automation & SQL Client */
            <div className="table-responsive">
              <table className="eduparx-table" data-testid="pegawai-table">
                <thead>
                  <tr>
                    <th scope="col">NIP</th>
                    <th scope="col">Nama Lengkap</th>
                    <th scope="col">Jabatan</th>
                    <th scope="col">Status</th>
                    <th scope="col">Akun Terkait</th>
                    {(canManage || canDelete) && <th scope="col" style={{ textAlign: 'center' }}>Aksi</th>}
                  </tr>
                </thead>
                <tbody>
                  {filteredList.map((item) => (
                    <tr key={item.id}>
                      <td><strong>{item.nip}</strong></td>
                      <td>{item.nama_lengkap}</td>
                      <td>{item.jabatan}</td>
                      <td>
                        <span className={`badge-status badge-${item.status}`}>
                          {item.status.toUpperCase()}
                        </span>
                      </td>
                      <td>{item.User?.username || '-'}</td>
                      {(canManage || canDelete) && (
                        <td style={{ textAlign: 'center' }}>
                          <div style={{ display: 'inline-flex', gap: '0.4rem' }}>
                            {canManage && (
                              <Link
                                to={`/pegawai/edit/${item.id}`}
                                className="btn-action-sm btn-edit"
                                data-testid={`btn-edit-${item.id}`}
                              >
                                Edit
                              </Link>
                            )}
                            {canDelete && (
                              <button
                                type="button"
                                className="btn-action-sm btn-delete"
                                onClick={() => handleDeleteClick(item.id)}
                                data-testid={`btn-delete-${item.id}`}
                              >
                                Hapus
                              </button>
                            )}
                          </div>
                        </td>
                      )}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </section>
      </div>

      <ConfirmDialog
        isOpen={isDialogOpen}
        title="Hapus Data Pegawai"
        message="Apakah Anda yakin ingin menghapus data pegawai ini? Tindakan ini tidak dapat dibatalkan."
        onConfirm={handleConfirmDelete}
        onCancel={() => setIsDialogOpen(false)}
      />
    </Layout>
  );
}
