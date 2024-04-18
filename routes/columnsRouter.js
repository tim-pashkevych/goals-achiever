import { Router } from 'express';

import column from '../controllers/columnsControllers.js';
import validateBody from '../decorators/validateBody.js';
import {
  columnCreateSchema,
  columnUpdateSchema,
} from '../schemas/columnSchemas.js';

const columnsRouter = Router();

columnsRouter.post('/', validateBody(columnCreateSchema), column.createColumn);
columnsRouter.patch(
  '/:id',
  validateBody(columnUpdateSchema),
  column.updateColumn
);
columnsRouter.delete('/:id', validateBody('...'), column.deleteColumn);

export default columnsRouter;
