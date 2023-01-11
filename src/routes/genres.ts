import { Router } from 'express';
import { deleteItem, getItem, getItems, postItem, updateItem } from '../controllers/genres.controller';
import { isAdmin } from '../middlewares/admin';
import { checkSession } from '../middlewares/session';
const router = Router();

router.get('/', getItems);
router.get('/:id', getItem);
router.post('/', [checkSession, isAdmin], postItem);
router.put('/:id', [checkSession, isAdmin], updateItem);
router.delete('/:id', [checkSession, isAdmin], deleteItem);

export { router };
