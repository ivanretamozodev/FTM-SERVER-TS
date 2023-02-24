import mongoose, { Schema, model } from 'mongoose';
import { Season } from '../interfaces/season.interface';
import ChapterSchema from './chapter.model';

const SeasonSchema = new Schema<Season>(
    {
        name: { type: String, required: true },
        chapters: [ChapterSchema],
    },
    { versionKey: false, timestamps: true }
);

/* const seasonModel = model('Season', SeasonSchema); */

export default SeasonSchema;
