import HttpError from '../helpers/HttpError.js';
import { ctrlWrapper } from '../decorators/index.js';
import { getColumnById } from '../services/columnsServices/getColumnById.js';

const authColumnAndBoard = async (req, _, next) => {
  const columnId = req.body.columnId;
  const boardId = req.body.boardId;

  const column = await getColumnById({ owner: req.user._id, _id: columnId, boardId });

  if (!column) {
    return next(HttpError(400, 'Combination of board Id and column Id is invalid'));
  } else {
    next();
  }
};

export default ctrlWrapper(authColumnAndBoard);
