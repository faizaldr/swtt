import { Op } from 'sequelize';
import { Pegawai, User } from '../models/index.js';

export async function getAll(req, res) {
  try {
    const data = await Pegawai.findAll({
      include: [{
        model: User,
        attributes: ['username', 'role']
      }],
      order: [['id', 'ASC']]
    });
    return res.status(200).json(data);
  } catch (error) {
    console.error('GetAll Pegawai error:', error);
    return res.status(500).json({ detail: 'Internal server error' });
  }
}

export async function getById(req, res) {
  try {
    const item = await Pegawai.findByPk(req.params.id, {
      include: [{
        model: User,
        attributes: ['username', 'role']
      }]
    });

    if (!item) {
      return res.status(404).json({ detail: 'Pegawai tidak ditemukan' });
    }

    return res.status(200).json(item);
  } catch (error) {
    console.error('GetById Pegawai error:', error);
    return res.status(500).json({ detail: 'Internal server error' });
  }
}

export async function create(req, res) {
  try {
    const { user_id, nip, nama_lengkap, jabatan, status } = req.body;

    if (!nip || !nama_lengkap || !jabatan) {
      return res.status(400).json({ detail: 'NIP, Nama Lengkap, dan Jabatan wajib diisi' });
    }

    const exists = await Pegawai.findOne({ where: { nip } });
    if (exists) {
      return res.status(400).json({ detail: 'NIP sudah terdaftar' });
    }

    const created = await Pegawai.create({
      user_id: user_id || null,
      nip,
      nama_lengkap,
      jabatan,
      status: status || 'aktif'
    });

    return res.status(201).json(created);
  } catch (error) {
    console.error('Create Pegawai error:', error);
    return res.status(500).json({ detail: 'Internal server error' });
  }
}

export async function update(req, res) {
  try {
    const item = await Pegawai.findByPk(req.params.id);
    if (!item) {
      return res.status(404).json({ detail: 'Pegawai tidak ditemukan' });
    }

    const { user_id, nip, nama_lengkap, jabatan, status } = req.body;

    if (nip && nip !== item.nip) {
      const exists = await Pegawai.findOne({
        where: {
          nip,
          id: { [Op.ne]: item.id }
        }
      });
      if (exists) {
        return res.status(400).json({ detail: 'NIP sudah terdaftar' });
      }
    }

    await item.update({
      user_id: user_id !== undefined ? user_id : item.user_id,
      nip: nip || item.nip,
      nama_lengkap: nama_lengkap || item.nama_lengkap,
      jabatan: jabatan || item.jabatan,
      status: status || item.status
    });

    return res.status(200).json(item);
  } catch (error) {
    console.error('Update Pegawai error:', error);
    return res.status(500).json({ detail: 'Internal server error' });
  }
}

export async function remove(req, res) {
  try {
    const item = await Pegawai.findByPk(req.params.id);
    if (!item) {
      return res.status(404).json({ detail: 'Pegawai tidak ditemukan' });
    }

    await item.destroy();
    return res.status(204).send();
  } catch (error) {
    console.error('Delete Pegawai error:', error);
    return res.status(500).json({ detail: 'Internal server error' });
  }
}

export default { getAll, getById, create, update, remove };
