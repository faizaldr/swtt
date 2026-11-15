import express from 'express';
import pegawaiController from '../controllers/pegawai.controller.js';
import authMiddleware from '../middleware/auth.middleware.js';
import roleMiddleware from '../middleware/role.middleware.js';

const router = express.Router();

router.get('/', authMiddleware, pegawaiController.getAll);
router.post('/', authMiddleware, roleMiddleware('hr', 'admin'), pegawaiController.create);
router.get('/:id', authMiddleware, pegawaiController.getById);
router.put('/:id', authMiddleware, roleMiddleware('hr', 'admin'), pegawaiController.update);
router.delete('/:id', authMiddleware, roleMiddleware('admin'), pegawaiController.remove);

export default router;
