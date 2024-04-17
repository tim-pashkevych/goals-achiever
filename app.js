import express from 'express';
import morgan from 'morgan';
import cors from 'cors';

import { cardsRouter } from './routes/index.js';

const app = express();

app.use(morgan('tiny'));
app.use(express.json());
app.use(cors());

app.use('/cards', cardsRouter);

app.use((_, res) => {
  res.status(404).json({ message: 'Route not found' });
});

app.use((error, _, res, __) => {
  const { status = 500, message = 'Server error' } = error;
  res.status(status).json({ message });
});

export default app;
