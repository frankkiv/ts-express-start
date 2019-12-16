import {Router, RequestHandler} from 'express';
import { getTodos, createTodo } from '../controllers/todos.controller';

const router = Router();

router.get('/', getTodos);
router.post('/', createTodo);
router.patch('/:id');
router.delete('/:id');

export default router;