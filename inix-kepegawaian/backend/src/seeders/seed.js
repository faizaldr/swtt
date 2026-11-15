import bcrypt from 'bcryptjs';
import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';
import { sequelize, User, Pegawai, Cuti } from '../models/index.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
dotenv.config({ path: path.resolve(__dirname, '../../../backend/.env') });

async function runSeed() {
  try {
    console.log('Memulai proses database reset & seeding...');
    await sequelize.sync({ force: true });

    // 1. Seed Users
    const passwordAdmin = await bcrypt.hash('Admin@123!', 10);
    const passwordHr = await bcrypt.hash('Hr@123!', 10);
    const passwordManager = await bcrypt.hash('Manager@123!', 10);
    const passwordPegawai = await bcrypt.hash('Pegawai@123!', 10);

    const users = await User.bulkCreate([
      { username: 'admin@inix.com', password: passwordAdmin, role: 'admin', is_active: true },
      { username: 'hr@inix.com', password: passwordHr, role: 'hr', is_active: true },
      { username: 'manager@inix.com', password: passwordManager, role: 'manajer', is_active: true },
      { username: 'pegawai@inix.com', password: passwordPegawai, role: 'pegawai', is_active: true }
    ]);
    console.log('✓ 4 Users berhasil di-seed.');

    // 2. Seed Pegawai
    const pegawais = await Pegawai.bulkCreate([
      {
        user_id: users[1].id, // hr@inix.com
        nip: 'NIP-2025-001',
        nama_lengkap: 'Andi Wijaya',
        jabatan: 'Staff HR',
        status: 'aktif',
        kuota_cuti: 12
      },
      {
        user_id: users[2].id, // manager@inix.com
        nip: 'NIP-2025-002',
        nama_lengkap: 'Siti Rahayu',
        jabatan: 'Manajer IT',
        status: 'aktif',
        kuota_cuti: 12
      },
      {
        user_id: null,
        nip: 'NIP-2025-003',
        nama_lengkap: 'Rudi Hermawan',
        jabatan: 'Lead QA Automation',
        status: 'nonaktif',
        kuota_cuti: 12
      },
      {
        user_id: users[3].id, // pegawai@inix.com
        nip: 'NIP-2025-004',
        nama_lengkap: 'Budi Santoso',
        jabatan: 'AI Engineer',
        status: 'aktif',
        kuota_cuti: 12
      },
      {
        user_id: null,
        nip: 'NIP-2025-005',
        nama_lengkap: 'Maya Putri',
        jabatan: 'Staff Data Science',
        status: 'aktif',
        kuota_cuti: 12
      }
    ]);
    console.log('✓ 5 Pegawai berhasil di-seed.');

    // 3. Seed Cuti
    await Cuti.bulkCreate([
      {
        pegawai_id: pegawais[3].id, // Budi Santoso
        tgl_mulai: '2026-12-01',
        tgl_selesai: '2026-12-03',
        alasan: 'Mengikuti Konferensi AI Inixindo',
        status: 'PENDING'
      },
      {
        pegawai_id: pegawais[4].id, // Maya Putri
        tgl_mulai: '2026-11-20',
        tgl_selesai: '2026-11-21',
        alasan: 'Sakit',
        status: 'APPROVED'
      }
    ]);
    console.log('✓ 2 Cuti berhasil di-seed.');

    console.log('Seeding selesai sukses: 4 users, 5 pegawai, 2 cuti.');
    process.exit(0);
  } catch (error) {
    console.error('Gagal melakukan seed:', error);
    process.exit(1);
  }
}

runSeed();
