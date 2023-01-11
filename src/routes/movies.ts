import { Router } from 'express';
import { getItems, getItem, postItem, updateItem, deleteItem } from '../controllers/movies.controller';
import { checkSession } from '../middlewares/session';
const router = Router();

router.get('/', getItems);
router.get('/:id', getItem);
router.post('/', checkSession, postItem);
router.put('/:id', checkSession, updateItem);
router.delete('/:id', checkSession, deleteItem);

export { router };
