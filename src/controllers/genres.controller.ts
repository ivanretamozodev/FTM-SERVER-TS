import { Request, response, Response } from 'express';
import { getAllGenres, getGenreDetails, insertGenre, updateGenre, deleteGenre } from '../services/genres';
import { handleHttp } from '../utils/errorHandler';

const getItems = async (req: Request, res: Response) => {
    try {
        const { genres, length } = await getAllGenres();
        res.status(200).json({ success: true, length, genres });
    } catch (e) {
        handleHttp(res, 'ERROR_GET_GENRES');
    }
};
const getItem = async ({ params }: Request, res: Response) => {
    try {
        const response = await getGenreDetails(params.id);
        res.status(200).json(response);
    } catch (e) {
        handleHttp(res, 'ERROR_GET_GENRE');
    }
};

const postItem = async ({ body }: Request, res: Response) => {
    try {
        const response = await insertGenre(body);
        res.send(response);
    } catch (e) {
        handleHttp(res, 'ERROR_CREATE_GENRE', e);
    }
};

const updateItem = async ({ params, body }: Request, res: Response) => {
    try {
        const response = await updateGenre(params.id, body);
        res.status(200).json(response);
    } catch (e) {
        handleHttp(res, 'ERROR_UPDATE_GENRE');
    }
};

const deleteItem = async ({ params }: Request, res: Response) => {
    try {
        const response = await deleteGenre(params.id);
        res.status(200).json(response);
    } catch (e) {
        handleHttp(res, 'ERROR_DELETE_GENRE');
    }
};

export { getItems, getItem, postItem, updateItem, deleteItem };
