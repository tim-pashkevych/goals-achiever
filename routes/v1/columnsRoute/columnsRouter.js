import { Router } from 'express';

import { columnsCtrls } from '../../../controllers/index.js';
import validateBody from '../../../decorators/validateBody.js';
import { columnAddSchema, columnUpdateSchema } from '../../../schemas/columns/index.js';

export const columnsRouter = Router();

columnsRouter.post('/columns/', validateBody(columnAddSchema), columnsCtrls.addColumn);
columnsRouter.patch('/columns/:id', validateBody(columnUpdateSchema), columnsCtrls.updateColumn);
columnsRouter.delete('/columns/:id', columnsCtrls.deleteColumn);
