import { Types } from 'mongoose';

export interface Movie {
    name: string;
    year: string;
    genres: Array<Types.ObjectId>;
    rating: Number;
    image: string;
    description: string;
    link: String;
}
