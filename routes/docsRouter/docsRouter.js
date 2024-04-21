import express from 'express';
import swaggerUi from 'swagger-ui-express';
// import swaggerDocument from '../../swagger.json' assert { type: 'json' };

import { createRequire } from 'module';
const require = createRequire(import.meta.url);

const swaggerDocument = require('../../swagger.json');

export const docsRouter = express.Router();

docsRouter.use('/', swaggerUi.serve);
docsRouter.get('/', swaggerUi.setup(swaggerDocument));
