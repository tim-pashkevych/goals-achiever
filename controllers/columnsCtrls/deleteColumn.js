import { columnsServices } from '../../services/index.js';
import HttpError from '../../helpers/HttpError.js';

export const deleteColumn = async (req, res, next) => {
  const { id } = req.params;

  const { boardId } = req.body;

  const result = await columnsServices.removeColumn({ _id: id }, boardId);

  if (!result) {
    throw HttpError(404, 'Column not found');
  }

  res.status(204).json();
};
