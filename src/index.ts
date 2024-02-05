import { config } from 'dotenv';

import 'reflect-metadata';
import './shared/container';
import express from 'express';
import { router } from './routes';
import cors from 'cors';

if (process.env.NODE_ENV !== 'production') {
  config();
}

const corsOptions = {
  origin: ['http://localhost:3000', 'https://medease.up.railway.app'],
  optionsSuccessStatus: 200 // algumas versões do navegador 204
};

const PORT = process.env.PORT || 3000;
const app = express();
app.use(express.json());
app.use(cors(corsOptions));
app.use(router);

app.listen(PORT, () =>
  console.log(`API available on http://localhost:${PORT}`)
);
