import { Serie } from './../interfaces/serie.interface';
import serieModel from '../models/serie.model';

const getAllSeries = async (page: number, limit: number) => {
    const [series, totalPages] = await Promise.all([
        serieModel
            .find({})
            .select('name posterImage inEmition featured')
            .limit(limit)
            .skip((page - 1) * limit)
            .sort({ createdAt: -1 }),
        serieModel.countDocuments().then((total: number) => {
            return Math.ceil(total / limit);
        }),
        ,
    ]);
    const serie = {
        currentPage: page,
        totalPages,
        series,
    };
    return serie;
};

const getSerieDetails = async (id: string) => {
    const serie = await serieModel.findOne({ _id: id });
    return serie;
};

const insertSerie = async (data: Serie) => {
    const serie = new serieModel(data);
    await serie.save();
    return serie;
};

const updateSerie = async (id: string, data: Serie) => {
    const serie = await serieModel.findByIdAndUpdate({ _id: id }, data, { new: true });
    return serie;
};

const deleteSerie = async (id: string) => {
    const serie = await serieModel.findByIdAndDelete({ _id: id });
    return { success: true };
};

export { getAllSeries, getSerieDetails, insertSerie, updateSerie, deleteSerie };
