import 'dotenv/config';
import mongoose, { connect } from 'mongoose';

async function dbConnect(): Promise<void> {
    const DB_URL = process.env.DATABASE_CNN || '';
    mongoose.set('strictQuery', true);
    await connect(DB_URL);
}

export default dbConnect;
