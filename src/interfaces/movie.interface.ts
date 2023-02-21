import { Types } from 'mongoose';

export interface Movie {
    name: string;
    year: string;
    genres: Array<Types.ObjectId>;
    rating: Number;
    posterImage: string;
    description: string;
    featured: boolean;
    link: String;
    link4k: string;
}
