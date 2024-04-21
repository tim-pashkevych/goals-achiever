import { Router } from 'express';

import { columnsCtrls } from '../../../controllers/index.js';
import validateBody from '../../../decorators/validateBody.js';
import { columnAddSchema, columnUpdateSchema } from '../../../schemas/columns/index.js';
import { auth, authBoard } from '../../../middlewares/index.js';

export const columnsRouter = Router();

columnsRouter.post('/columns/', auth, authBoard, validateBody(columnAddSchema), columnsCtrls.addColumn);
columnsRouter.patch('/columns/:id', auth, authBoard, validateBody(columnUpdateSchema), columnsCtrls.updateColumn);
columnsRouter.delete('/columns/:id', auth, authBoard, columnsCtrls.deleteColumn);
