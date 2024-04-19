import { Router } from 'express';

import { columnsCtrls } from '../../../controllers/index.js';
import validateBody from '../../../decorators/validateBody.js';
import { columnAddSchema, columnUpdateSchema } from '../../../schemas/columns/index.js';
import auth from '../../../middlewares/auth.js';

export const columnsRouter = Router();

columnsRouter.post('/columns/', auth, validateBody(columnAddSchema), columnsCtrls.addColumn);
columnsRouter.patch('/columns/:id', auth, validateBody(columnUpdateSchema), columnsCtrls.updateColumn);
columnsRouter.delete('/columns/:id', auth, columnsCtrls.deleteColumn);
