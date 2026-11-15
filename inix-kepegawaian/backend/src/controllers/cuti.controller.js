import { Cuti, Pegawai } from '../models/index.js';

function calculateDays(startDateStr, endDateStr) {
  const start = new Date(startDateStr);
  const end = new Date(endDateStr);
  const diffTime = Math.abs(end - start);
  return Math.ceil(diffTime / (1000 * 60 * 60 * 24)) + 1;
}

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
        attributes: ['id', 'nip', 'nama_lengkap', 'jabatan', 'kuota_cuti']
      }],
      order: [['created_at', 'DESC']]
    });

    return res.status(200).json(data);
  } catch (error) {
    console.error('GetAll Cuti error:', error);
    return res.status(500).json({ detail: 'Internal server error' });
  }
}

export async function getKuota(req, res) {
  try {
    const pegawai = await Pegawai.findOne({ where: { user_id: req.user.user_id } });
    if (!pegawai) {
      return res.status(404).json({ detail: 'Data profil pegawai Anda tidak ditemukan' });
    }

    const currentYear = new Date().getFullYear();
    const cutiList = await Cuti.findAll({
      where: {
        pegawai_id: pegawai.id,
        status: ['APPROVED', 'PENDING']
      }
    });

    let approvedDays = 0;
    let pendingDays = 0;

    for (const item of cutiList) {
      const itemYear = new Date(item.tgl_mulai).getFullYear();
      if (itemYear === currentYear) {
        const days = calculateDays(item.tgl_mulai, item.tgl_selesai);
        if (item.status === 'APPROVED') approvedDays += days;
        if (item.status === 'PENDING') pendingDays += days;
      }
    }

    const totalKuota = pegawai.kuota_cuti !== undefined ? pegawai.kuota_cuti : 12;
    const sisaKuota = Math.max(0, totalKuota - (approvedDays + pendingDays));

    return res.status(200).json({
      tahun: currentYear,
      kuota_tahunan: totalKuota,
      cuti_approved_hari: approvedDays,
      cuti_pending_hari: pendingDays,
      terpakai_hari: approvedDays + pendingDays,
      sisa_kuota: sisaKuota
    });
  } catch (error) {
    console.error('Get Kuota Cuti error:', error);
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

    // Validasi Kuota Cuti Tahunan (12 Hari)
    const requestedDays = calculateDays(tgl_mulai, tgl_selesai);
    const targetYear = new Date(tgl_mulai).getFullYear();

    const existingCutis = await Cuti.findAll({
      where: {
        pegawai_id: pegawai.id,
        status: ['APPROVED', 'PENDING']
      }
    });

    let usedDays = 0;
    for (const item of existingCutis) {
      const itemYear = new Date(item.tgl_mulai).getFullYear();
      if (itemYear === targetYear) {
        usedDays += calculateDays(item.tgl_mulai, item.tgl_selesai);
      }
    }

    const totalKuota = pegawai.kuota_cuti !== undefined ? pegawai.kuota_cuti : 12;
    const sisaKuota = totalKuota - usedDays;

    if (requestedDays > sisaKuota) {
      return res.status(400).json({
        detail: `Kuota cuti tahunan tidak mencukupi. Kuota tahunan: ${totalKuota} hari, terpakai/pending: ${usedDays} hari, sisa kuota: ${sisaKuota} hari, diajukan: ${requestedDays} hari.`
      });
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

export default { getAll, getKuota, create, updateStatus };
