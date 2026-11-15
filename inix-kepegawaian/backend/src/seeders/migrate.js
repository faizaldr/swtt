import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';
import { sequelize } from '../models/index.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
dotenv.config({ path: path.resolve(__dirname, '../../../backend/.env') });

async function runMigrate() {
  try {
    console.log('Memulai sinkronisasi / migrasi database...');
    await sequelize.sync({ alter: true });
    console.log('✓ Sinkronisasi tabel database selesai.');
    process.exit(0);
  } catch (error) {
    console.error('Gagal migrasi database:', error);
    process.exit(1);
  }
}

runMigrate();
