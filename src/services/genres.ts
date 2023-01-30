import { Genre } from '../interfaces/genre.interface';
import { Movie } from '../interfaces/movie.interface';
import genreModel from '../models/genre.model';

const getAllGenres = async () => {
    const [genres, length] = await Promise.all([genreModel.find({}), genreModel.countDocuments()]);
    const genre = {
        length,
        genres,
    };
    return genre;
};

const getGenreDetails = async (id: string) => {
    const genre = await genreModel.findOne({ _id: id });
    return genre;
};

const insertGenre = async (data: Genre) => {
    const genre = new genreModel(data);
    await genre.save();
    return genre;
};

const updateGenre = async (id: string, data: Genre) => {
    const genre = await genreModel.findByIdAndUpdate({ _id: id }, data, { new: true });
    return genre;
};

const deleteGenre = async (id: string) => {
    const genre = await genreModel.findByIdAndDelete({ _id: id });
    return { success: true };
};

export { getAllGenres, getGenreDetails, insertGenre, updateGenre, deleteGenre };
