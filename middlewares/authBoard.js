import HttpError from '../helpers/HttpError.js';
import { ctrlWrapper } from '../decorators/index.js';
import { getBoardById } from '../services/boardsServices/getBoardById.js';

const authBoard = async (req, _, next) => {
  const boardId = req.params.id || req.body.boardId;

  const board = await getBoardById({ owner: req.user, _id: boardId });

  if (!board) {
    next(HttpError(401, 'Not authorized: boardId is invalid'));
  } else {
    next();
  }
};

export default ctrlWrapper(authBoard);
