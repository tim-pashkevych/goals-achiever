import { boardsServices } from '../../services/index.js';
import HttpError from '../../helpers/HttpError.js';

export const deleteBoard = async (req, res, next) => {
  const { id } = req.params;

  const result = await boardsServices.removeBoard({ _id: id });

  if (!result) {
    throw HttpError(404);
  }

  res.status(204).json();
};
