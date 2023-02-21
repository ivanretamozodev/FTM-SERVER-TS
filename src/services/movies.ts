import { Movie } from '../interfaces/movie.interface';
import movieModel from '../models/movies.model';

const getAllMovies = async (page: number, limit: number) => {
    const [movies, totalPages] = await Promise.all([
        movieModel
            .find({})
            .limit(limit)
            .skip((page - 1) * limit)
            .sort({ createdAt: -1 })
            .select('posterImage featured link4k'),
        movieModel.countDocuments().then((total: number) => {
            return Math.ceil(total / limit);
        }),
    ]);

    const movie = {
        currentPage: page,
        movies,
        totalPages,
    };
    return movie;
};

const getMovieDetails = async (id: string) => {
    const movie = await movieModel.findOne({ _id: id }).populate('genres', 'name');
    return movie;
};

const insertMovie = async (data: Movie) => {
    const movie = new movieModel(data);
    await movie.save();
    return movie;
};

const updateMovie = async (id: string, data: Movie) => {
    const movie = await movieModel.findByIdAndUpdate({ _id: id }, data, { new: true });
    return movie;
};

const deleteMovie = async (id: string) => {
    const movie = await movieModel.findByIdAndDelete({ _id: id });
    return { success: true };
};

const getFeaturedMovies = async () => {
    const query = { featured: true };
    const movie = await movieModel
        .find(query)
        .sort({ createdAt: -1 })
        .select('posterImage description name rating featured');
    return movie;
};

const getMostValoratedMovies = async () => {
    const movie = await movieModel
        .find({ rating: { $gt: 7 } })
        .sort({ createdAt: -1 })
        .select('posterImage description name rating');
    return movie;
};
const getMoviesByGenre = async (page: number, genre: string, limit: number = 16) => {
    /* const movies = await movieModel.find({ genres: { $all: [genre] } }).select('name'); */
    const [movies, totalPages] = await Promise.all([
        movieModel
            .find({ genres: { $all: [genre] } })
            .limit(limit)
            .skip((page - 1) * limit)
            .sort({ createdAt: -1 })
            .select('posterImage featured'),
        movieModel.countDocuments({ genres: { $all: [genre] } }).then((total: number) => {
            return Math.ceil(total / limit);
        }),
    ]);

    const movie = {
        currentPage: page,
        movies,
        totalPages,
    };
    return movie;
};
export {
    insertMovie,
    getAllMovies,
    getMovieDetails,
    updateMovie,
    deleteMovie,
    getFeaturedMovies,
    getMostValoratedMovies,
    getMoviesByGenre,
};
