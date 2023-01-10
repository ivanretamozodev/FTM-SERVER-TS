import { Request, response, Response } from 'express';
import { deleteMovie, getAllMovies, getMovieDetails, insertMovie, updateMovie } from '../services/movies';
import { handleHttp } from '../utils/errorHandler';

const getItems = async (req: Request, res: Response) => {
    try {
        const response = await getAllMovies();
        res.status(200).json(response);
    } catch (e) {
        handleHttp(res, 'ERROR_GET_MOVIES');
    }
};
const getItem = async ({ params }: Request, res: Response) => {
    try {
        const response = await getMovieDetails(params.id);
        res.status(200).json(response);
    } catch (e) {
        handleHttp(res, 'ERROR_GET_MOVIE');
    }
};

const postItem = async ({ body }: Request, res: Response) => {
    try {
        const response = await insertMovie(body);
        res.send(response);
    } catch (e) {
        handleHttp(res, 'ERROR_CREATE_MOVIE', e);
    }
};

const updateItem = async ({ params, body }: Request, res: Response) => {
    try {
        const response = await updateMovie(params.id, body);
        res.status(200).json(response);
    } catch (e) {
        handleHttp(res, 'ERROR_UPDATE_MOVIE');
    }
};

const deleteItem = async ({ params }: Request, res: Response) => {
    try {
        const response = await deleteMovie(params.id);
        res.status(200).json(response);
    } catch (e) {
        handleHttp(res, 'ERROR_DELETE_MOVIE');
    }
};

export { getItems, getItem, postItem, updateItem, deleteItem };
