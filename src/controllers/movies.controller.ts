import { Request, response, Response } from 'express';
import {
    deleteMovie,
    getAllMovies,
    getMovieDetails,
    insertMovie,
    updateMovie,
    getFeaturedMovies,
    getMostValoratedMovies,
} from '../services/movies';
import { handleHttp } from '../utils/errorHandler';

const getItems = async (req: Request, res: Response) => {
    try {
        /*
         *pagination data
         */
        const page: number = Number(req.query.page) || 1;
        const limit: number = Number(req.query.limit) || 20;

        const { currentPage, totalPages, movies } = await getAllMovies(page, limit);

        if (currentPage > totalPages) {
            return res.status(400).json({ success: false, message: 'PAGE_NOT_EXIST' });
        }

        res.status(200).json({ success: true, currentPage, totalPages, movies });
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

const getMostValoratedItems = async (req: Request, res: Response) => {
    try {
        const response = await getMostValoratedMovies();
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

export { getItems, getItem, postItem, updateItem, deleteItem, getFeatureItems, getMostValoratedItems };
