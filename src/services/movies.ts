import { Movie } from '../interfaces/movie.interface';
import movieModel from '../models/movies.model';

const getAllMovies = async () => {
    const movie = await movieModel.find({}).select('posterImage');
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
    const movie = await movieModel.find(query).select('posterImage description name');
    return movie;
};

export { insertMovie, getAllMovies, getMovieDetails, updateMovie, deleteMovie, getFeaturedMovies };
