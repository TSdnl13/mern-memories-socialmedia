import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';

import postRoutes from './routes/posts.js';
import userRoutes from './routes/users.js';

dotenv.config();

const app = express();

app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

app.use('/posts', postRoutes);
app.use('/user', userRoutes);

app.get('/', (req, res) => {
   res.send('Hello to memories API');
});

const CONECTION_URL = process.env.EXPRESS_CONNECTION_URL;
const PORT = process.env.PORT || 5000;


mongoose.connect(CONECTION_URL, {useNewUrlParser: true, useUnifiedTopology: true })
   .then(() => app.listen(PORT, () => console.log(`Server running on PORT: ${PORT}`)))
   .catch(error => console.log(error.message));
