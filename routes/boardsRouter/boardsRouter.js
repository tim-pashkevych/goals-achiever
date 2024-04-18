import { Router } from 'express';

import validateBody from '../../decorators/validateBody.js';
import { boardsCtrls } from '../../controllers/index.js';
import { boardAddSchema, boardUpdateSchema } from '../../schemas/boards/index.js';
import auth from '../../middlewares/auth.js';

export const boardsRouter = Router();

boardsRouter.post('/', auth, validateBody(boardAddSchema), boardsCtrls.addBoard);
boardsRouter.get('/:id', auth, boardsCtrls.getBoardById);
boardsRouter.patch('/:id', auth, validateBody(boardUpdateSchema), boardsCtrls.updateBoard);
boardsRouter.delete('/:id', auth, boardsCtrls.deleteBoard);
