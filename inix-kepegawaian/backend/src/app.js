import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';

import { sequelize } from './models/index.js';
import authRoutes from './routes/auth.routes.js';
import pegawaiRoutes from './routes/pegawai.routes.js';
import cutiRoutes from './routes/cuti.routes.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
dotenv.config({ path: path.resolve(__dirname, '../../backend/.env') });

const app = express();
const PORT = process.env.PORT || 8000;

// CORS setup
const allowedOrigins = ['http://localhost:3000', 'http://localhost:5173'];
app.use(cors({
  origin: (origin, callback) => {
    if (!origin || allowedOrigins.includes(origin)) {
      return callback(null, true);
    }
    return callback(null, true); // Dev flexible CORS
  },
  credentials: true
}));

// Body parsers
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// NOTE FOR QA TESTING TOOLS (OWASP ZAP & k6):
// 1. Sengaja biarkan header 'X-Powered-By: Express' aktif agar terdeteksi Information Leakage
// 2. Sengaja tidak memasang Content-Security-Policy & X-Content-Type-Options ketat
// 3. Sengaja tidak mengaktifkan rate limiter agar k6 load testing berjalan lancar

// Mount API routes
app.use('/api/auth', authRoutes);
app.use('/api/pegawai', pegawaiRoutes);
app.use('/api/cuti', cutiRoutes);

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.status(200).json({
    status: 'ok',
    timestamp: new Date().toISOString(),
    service: 'PT INIX Kepegawaian Backend API'
  });
});

// 404 handler
app.use((req, res) => {
  res.status(404).json({ detail: 'Endpoint tidak ditemukan' });
});

// Global error handler
app.use((err, req, res, next) => {
  console.error('Unhandled Server Error:', err);
  res.status(500).json({ detail: 'Internal server error' });
});

// Database sync & start server
if (process.env.NODE_ENV !== 'test') {
  sequelize.sync({ alter: false })
    .then(() => {
      console.log('Database connected & synced successfully.');
      app.listen(PORT, () => {
        console.log(`Server Kepegawaian PT INIX berjalan di port ${PORT}`);
      });
    })
    .catch((err) => {
      console.error('Database connection failed:', err);
      // Tetap listen agar healthcheck / dev tooling bisa jalan
      app.listen(PORT, () => {
        console.log(`Server started on port ${PORT} (DB Connection Warning)`);
      });
    });
}

export default app;
