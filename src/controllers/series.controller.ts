import { Request, Response } from 'express';
import { getAllSeries, getSerieDetails, insertSerie, updateSerie, deleteSerie } from '../services/series';
import { handleHttp } from '../utils/errorHandler';

const getItems = async (req: Request, res: Response) => {
    try {
        /*
         *pagination data
         */
        const page: number = Number(req.query.page) || 1;
        const limit: number = Number(req.query.limit) || 20;

        const { currentPage, totalPages, series } = await getAllSeries(page, limit);

        if (currentPage > totalPages) {
            return res.status(400).json({ success: false, message: 'PAGE_NOT_EXIST' });
        }
        res.status(200).json({ success: true, currentPage, totalPages, series });
    } catch (e) {
        handleHttp(res, 'ERROR_GET_SERIES');
    }
};
const getItem = async ({ params }: Request, res: Response) => {
    try {
        const response = await getSerieDetails(params.id);
        res.status(200).json(response);
    } catch (e) {
        handleHttp(res, 'ERROR_GET_SERIE');
    }
};

const postItem = async ({ body }: Request, res: Response) => {
    try {
        const response = await insertSerie(body);
        res.send(response);
    } catch (e) {
        handleHttp(res, 'ERROR_CREATE_SERIE', e);
    }
};

const updateItem = async ({ params, body }: Request, res: Response) => {
    try {
        const response = await updateSerie(params.id, body);
        res.status(200).json(response);
    } catch (e) {
        handleHttp(res, 'ERROR_UPDATE_SERIE');
    }
};

const deleteItem = async ({ params }: Request, res: Response) => {
    try {
        const response = await deleteSerie(params.id);
        res.status(200).json(response);
    } catch (e) {
        handleHttp(res, 'ERROR_DELETE_SERIE');
    }
};

export { getItems, getItem, postItem, updateItem, deleteItem };
