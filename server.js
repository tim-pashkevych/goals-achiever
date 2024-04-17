import mongoose from 'mongoose';
import 'dotenv/config';

import app from './app.js';

const { DB_HOST, PORT = 3000 } = process.env;

mongoose
  .connect(DB_HOST)
  .then(() => {
    app.listen(PORT, () => {
      console.log('Database connection established');
    });
  })
  .catch(error => {
    console.error(error.message);
    process.exit(1);
  });
