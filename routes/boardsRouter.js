import { Router } from 'express';
import board from '../controllers/boardsControllers.js';
import validateBody from '../decorators/validateBody.js';
import {
  addColumnSchema,
  createSchema,
  updateSchema,
} from '../schemas/boardsSchemas.js';

const boardsRouter = Router();

boardsRouter.post('/', validateBody(createSchema), board.createBoard);
boardsRouter.patch('/', validateBody(updateSchema), board.update);
boardsRouter.delete('/:id', board.deleteBoard);
boardsRouter.post('/columns', validateBody(addColumnSchema), board.addColumn);
boardsRouter.delete('/:boardId/columns/:columnId', board.deleteColumn);

export default boardsRouter;
