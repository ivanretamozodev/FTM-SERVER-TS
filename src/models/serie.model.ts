import mongoose, { Schema, model } from 'mongoose';
import { Serie } from './../interfaces/serie.interface';
import SeasonSchema from './season.model';

const SerieSchema = new Schema<Serie>(
    {
        name: { type: String, required: true },
        year: { type: String, required: true },
        rating: { type: Number, default: 0 },
        posterImage: { type: String, required: true },
        description: { type: String, required: true },
        genres: [{ type: mongoose.Types.ObjectId, ref: 'Genre' }],
        featured: { type: Boolean, default: false },
        season: [SeasonSchema],
        inEmition: { type: Boolean, default: true },
    },
    { versionKey: false, timestamps: true }
);

const serieModel = model('Serie', SerieSchema);

export default serieModel;
