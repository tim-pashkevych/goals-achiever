import HttpError from '../helpers/HttpError.js';
import { ctrlWrapper } from '../decorators/index.js';
import { getColumnById } from '../services/columnsServices/getColumnById.js';

const authColumn = async (req, _, next) => {
  const columnId = req.params.id || req.body.columnId;

  const column = await getColumnById({ owner: req.user, _id: columnId });

  if (!column) {
    return next(HttpError(401, 'Not authorized: columnId is invalid'));
  } else {
    next();
  }
};

export default ctrlWrapper(authColumn);
