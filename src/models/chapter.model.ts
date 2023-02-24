import { Chapter } from './../interfaces/chapter.interface';
import mongoose, { Schema, model } from 'mongoose';

const ChapterSchema = new Schema<Chapter>(
    {
        name: { type: String, required: true, unique: true },
        link: { type: String, required: true },
    },
    { versionKey: false, timestamps: true }
);

/* const chapterModel = model('Chapter', ChapterSchema); */

export default ChapterSchema;
