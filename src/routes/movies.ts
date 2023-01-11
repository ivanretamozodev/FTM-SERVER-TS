import { Router } from 'express';
import { getItems, getItem, postItem, updateItem, deleteItem } from '../controllers/movies.controller';
import { checkSession } from '../middlewares/session';
const router = Router();

router.get('/', checkSession, getItems);
router.get('/:id', getItem);
router.post('/', postItem);
router.put('/:id', updateItem);
router.delete('/:id', deleteItem);

export { router };
