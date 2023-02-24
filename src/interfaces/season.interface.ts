import { Chapter } from './chapter.interface';
export interface Season extends Document {
    name: string;
    chapters: Chapter[];
}
