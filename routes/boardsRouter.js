import { Router } from 'express';
import board from '../controllers/boardsControllers.js';

const boardsRouter = Router();

boardsRouter.post('/', board.createBoard);
boardsRouter.patch('/icon', board.changeTitle);
boardsRouter.patch('/', board.changeIcon);
boardsRouter.patch('/owner', board.changeOwner);
boardsRouter.delete('/:id', board.deleteBoard);
boardsRouter.post('/columns', board.addColumn);
boardsRouter.delete('/:boardId/columns/:columnId', board.deleteColumn);

export default boardsRouter;
