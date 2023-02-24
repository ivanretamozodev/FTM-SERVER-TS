import { Types } from 'mongoose';
import { Season } from './season.interface';

export interface Serie {
    name: string;
    year: string;
    genres: Array<Types.ObjectId>;
    rating: Number;
    posterImage: string;
    description: string;
    featured: boolean;
    season: Season[];
    inEmition: boolean;
}
