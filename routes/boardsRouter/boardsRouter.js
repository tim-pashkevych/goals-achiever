import { Router } from 'express';

import validateBody from '../../decorators/validateBody.js';
import { boardsCtrls } from '../../controllers/index.js';
import { boardAddSchema, boardUpdateSchema } from '../../schemas/boards/index.js';

export const boardsRouter = Router();

boardsRouter.post('/', validateBody(boardAddSchema), boardsCtrls.addBoard);
boardsRouter.get('/:id', boardsCtrls.getBoardById);
boardsRouter.patch('/:id', validateBody(boardUpdateSchema), boardsCtrls.updateBoard);
boardsRouter.delete('/:id', boardsCtrls.deleteBoard);
