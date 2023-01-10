import { Schema, model } from 'mongoose';
import { Genre } from '../interfaces/genre.interface';

const GenreSchema = new Schema<Genre>(
    {
        name: {
            type: String,
            required: true,
        },
    },
    {
        versionKey: false,
        timestamps: true,
    }
);

const genreModel = model('Genre', GenreSchema);

export default genreModel;
