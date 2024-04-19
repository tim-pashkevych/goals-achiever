import { Router } from 'express';

import { columnsCtrls } from '../../controllers/index.js';
import validateBody from '../../decorators/validateBody.js';
import { columnAddSchema, columnUpdateSchema } from '../../schemas/columns/index.js';
import auth from '../../middlewares/auth.js';

export const columnsRouter = Router();

columnsRouter.post('/', auth, validateBody(columnAddSchema), columnsCtrls.addColumn);
columnsRouter.patch('/:id', validateBody(columnUpdateSchema), columnsCtrls.updateColumn);
columnsRouter.delete('/:id', columnsCtrls.deleteColumn);
