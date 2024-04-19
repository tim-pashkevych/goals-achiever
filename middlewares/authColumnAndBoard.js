import HttpError from '../helpers/HttpError.js';
import { ctrlWrapper } from '../decorators/index.js';
import { getColumnById } from '../services/columnsServices/getColumnById.js';

const authColumnAndBoard = async (req, _, next) => {
  const columnId = req.params.id || req.body.columnId;
  const boardId = req.params.id || req.body.boardId;

  const column = await getColumnById({ owner: req.user, _id: columnId, boardId });

  if (!column) {
    return next(HttpError(401, 'Not authorized: combination of boardId and columnId is invalid'));
  } else {
    next();
  }
};

export default ctrlWrapper(authColumnAndBoard);
