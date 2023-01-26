import { Router } from 'express';
import { getItems, getItem, postItem, updateItem, deleteItem, getFeatureItems } from '../controllers/movies.controller';
import { isAdmin } from '../middlewares/admin';
import { checkSession } from '../middlewares/session';
const router = Router();

router.get('/featured', getFeatureItems);
router.get('/', getItems);
router.get('/:id', getItem);
router.post('/', [checkSession, isAdmin], postItem);
router.put('/:id', [checkSession, isAdmin], updateItem);
router.delete('/:id', [checkSession, isAdmin], deleteItem);

export { router };
