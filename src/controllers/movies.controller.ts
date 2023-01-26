import { Request, response, Response } from 'express';
import {
    deleteMovie,
    getAllMovies,
    getMovieDetails,
    insertMovie,
    updateMovie,
    getFeaturedMovies,
} from '../services/movies';
import { handleHttp } from '../utils/errorHandler';

const getItems = async (req: Request, res: Response) => {
    try {
        const response = await getAllMovies();
        res.status(200).json({ success: true, results: response });
    } catch (e) {
        handleHttp(res, 'ERROR_GET_ITEMS');
    }
};

const getFeatureItems = async (req: Request, res: Response) => {
    try {
        const response = await getFeaturedMovies();
        res.status(200).json({ success: true, results: response });
    } catch (e) {
        handleHttp(res, 'ERROR_GET_FEATURED_ITEMS');
    }
};

const getItem = async ({ params }: Request, res: Response) => {
    try {
        const response = await getMovieDetails(params.id);
        res.status(200).json({ success: true, results: response });
    } catch (e) {
        handleHttp(res, 'ERROR_GET_ITEM');
    }
};

const postItem = async ({ body }: Request, res: Response) => {
    try {
        const response = await insertMovie(body);
        res.send(response);
    } catch (e) {
        handleHttp(res, 'ERROR_CREATE_ITEM', e);
    }
};

const updateItem = async ({ params, body }: Request, res: Response) => {
    try {
        const response = await updateMovie(params.id, body);
        res.status(200).json(response);
    } catch (e) {
        handleHttp(res, 'ERROR_UPDATE_ITEM');
    }
};

const deleteItem = async ({ params }: Request, res: Response) => {
    try {
        const response = await deleteMovie(params.id);
        res.status(200).json(response);
    } catch (e) {
        handleHttp(res, 'ERROR_DELETE_ITEM');
    }
};

export { getItems, getItem, postItem, updateItem, deleteItem, getFeatureItems };
