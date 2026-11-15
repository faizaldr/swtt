import { Cuti, Pegawai } from '../models/index.js';

export async function getAll(req, res) {
  try {
    let whereClause = {};

    if (req.user.role === 'pegawai') {
      const pegawai = await Pegawai.findOne({ where: { user_id: req.user.user_id } });
      if (!pegawai) {
        return res.status(200).json([]);
      }
      whereClause.pegawai_id = pegawai.id;
    }

    const data = await Cuti.findAll({
      where: whereClause,
      include: [{
        model: Pegawai,
        attributes: ['id', 'nip', 'nama_lengkap', 'jabatan']
      }],
      order: [['created_at', 'DESC']]
    });

    return res.status(200).json(data);
  } catch (error) {
    console.error('GetAll Cuti error:', error);
    return res.status(500).json({ detail: 'Internal server error' });
  }
}

export async function create(req, res) {
  try {
    if (req.user.role !== 'pegawai') {
      return res.status(403).json({ detail: 'Hanya pegawai yang dapat mengajukan cuti' });
    }

    const { tgl_mulai, tgl_selesai, alasan } = req.body;
    if (!tgl_mulai || !tgl_selesai || !alasan) {
      return res.status(400).json({ detail: 'Tanggal mulai, tanggal selesai, dan alasan wajib diisi' });
    }

    if (new Date(tgl_selesai) < new Date(tgl_mulai)) {
      return res.status(400).json({ detail: 'Tanggal selesai harus >= tanggal mulai' });
    }

    const pegawai = await Pegawai.findOne({ where: { user_id: req.user.user_id } });
    if (!pegawai) {
      return res.status(404).json({ detail: 'Data profil pegawai Anda tidak ditemukan' });
    }

    const created = await Cuti.create({
      pegawai_id: pegawai.id,
      tgl_mulai,
      tgl_selesai,
      alasan,
      status: 'PENDING'
    });

    return res.status(201).json(created);
  } catch (error) {
    console.error('Create Cuti error:', error);
    return res.status(500).json({ detail: 'Internal server error' });
  }
}

export async function updateStatus(req, res) {
  try {
    if (req.user.role !== 'manajer') {
      return res.status(403).json({ detail: 'Akses ditolak. Hanya Manajer yang dapat menyetujui atau menolak cuti.' });
    }

    const { status } = req.body;
    if (!status || !['APPROVED', 'REJECTED'].includes(status)) {
      return res.status(400).json({ detail: 'Status harus APPROVED atau REJECTED' });
    }

    const item = await Cuti.findByPk(req.params.id);
    if (!item) {
      return res.status(404).json({ detail: 'Data pengajuan cuti tidak ditemukan' });
    }

    if (item.status !== 'PENDING') {
      return res.status(400).json({ detail: 'Hanya cuti berstatus PENDING yang dapat diubah' });
    }

    await item.update({ status });
    return res.status(200).json(item);
  } catch (error) {
    console.error('Update Status Cuti error:', error);
    return res.status(500).json({ detail: 'Internal server error' });
  }
}

export default { getAll, create, updateStatus };
