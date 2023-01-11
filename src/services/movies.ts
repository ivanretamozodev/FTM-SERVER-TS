import { Movie } from '../interfaces/movie.interface';
import movieModel from '../models/movies.model';

const getAllMovies = async () => {
    const movie = movieModel.find({}).select('image name year rating');
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

export { insertMovie, getAllMovies, getMovieDetails, updateMovie, deleteMovie };
