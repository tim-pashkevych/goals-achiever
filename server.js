import mongoose from 'mongoose';
import 'dotenv/config';

import app from './app.js';

const { DB_HOST, PORT = 3000 } = process.env;

mongoose
  .connect(DB_HOST)
  .then(() => {
    console.log('Database connection established');
    app.listen(PORT, () => {
      console.log(`Application is running on port ${PORT}`);
    });
  })
  .catch(error => {
    console.error(error.message);
    process.exit(1);
  });
