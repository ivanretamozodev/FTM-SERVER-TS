import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import { router } from './routes/index';
import dbConnect from './database/config';
const app = express();

const PORT = process.env.PORT;

app.use(cors());
app.use(express.json());

app.use(router);

dbConnect().then(() => console.log('DB is Online'));
app.listen(PORT, () => console.log(`server running at PORT: ${PORT}`));
