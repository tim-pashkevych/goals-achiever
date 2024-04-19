import { Router } from 'express';

import validateBody from '../../../decorators/validateBody.js';
import { boardsCtrls } from '../../../controllers/index.js';
import { boardAddSchema, boardUpdateSchema } from '../../../schemas/boards/index.js';
import auth from '../../../middlewares/auth.js';

export const boardsRouter = Router();

boardsRouter.post('/boards/', auth, validateBody(boardAddSchema), boardsCtrls.addBoard);
boardsRouter.get('/boards/:id', auth, boardsCtrls.getBoardById);
boardsRouter.patch('/boards/:id', auth, validateBody(boardUpdateSchema), boardsCtrls.updateBoard);
boardsRouter.delete('/boards/:id', auth, boardsCtrls.deleteBoard);
