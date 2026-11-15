import express from 'express';
import cutiController from '../controllers/cuti.controller.js';
import authMiddleware from '../middleware/auth.middleware.js';
import roleMiddleware from '../middleware/role.middleware.js';

const router = express.Router();

router.get('/', authMiddleware, cutiController.getAll);
router.get('/kuota', authMiddleware, roleMiddleware('pegawai'), cutiController.getKuota);
router.post('/', authMiddleware, roleMiddleware('pegawai'), cutiController.create);
router.patch('/:id/status', authMiddleware, roleMiddleware('manajer'), cutiController.updateStatus);

export default router;
