import { Types } from 'mongoose';

export interface Movie {
    name: string;
    year: string;
    genres: Array<Types.ObjectId>;
    rating: Number;
    posterImage: string;
    backgroundImage: string;
    description: string;
    link: String;
    trailer: string;
    featured: boolean;
}
