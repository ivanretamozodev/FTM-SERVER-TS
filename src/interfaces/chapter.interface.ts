import { Document } from 'mongoose';

export interface Chapter extends Document {
    name: string;
    link: string;
}
