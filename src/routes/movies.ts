import { Router } from 'express';
import { getItems, getItem, postItem, updateItem, deleteItem } from '../controllers/movies.controller';
const router = Router();

router.get('/', getItems);
router.get('/:id', getItem);
router.post('/', postItem);
router.put('/:id', updateItem);
router.delete('/:id', deleteItem);

export { router };
