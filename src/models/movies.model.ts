import mongoose, { Schema, model } from 'mongoose';
import { Movie } from '../interfaces/movie.interface';

const MovieSchema = new Schema<Movie>(
    {
        name: { type: String, required: true },
        year: { type: String, required: true },
        rating: { type: Number, default: 0 },
        posterImage: { type: String, required: true },
        description: { type: String, required: true },
        genres: [{ type: mongoose.Types.ObjectId, ref: 'Genre' }],
        featured: { type: Boolean, default: false },
        link: { type: String, required: true },
        link4k: { type: String },
    },
    { versionKey: false, timestamps: true }
);

const movieModel = model('Movie', MovieSchema);

export default movieModel;
