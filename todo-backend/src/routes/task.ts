import { Router } from 'express';
import { getTasks, createTask, updateTask, deleteTask } from '../controllers/task';
import { verifyToken } from '../middleware/verifyToken';

const router = Router();

router.get('/', verifyToken, getTasks);
router.post('/', verifyToken, createTask);
router.put('/:id', verifyToken, updateTask);
router.delete('/:id', verifyToken, deleteTask);

export default router;