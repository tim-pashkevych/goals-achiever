import { cardsServices } from '../../services/index.js';
import HttpError from '../../helpers/HttpError.js';

export const deleteCard = async (req, res, next) => {
  const { id, columnId } = req.params;

  const result = await cardsServices.removeCard({ _id: id }, columnId);

  if (!result) {
    throw HttpError(404);
  }

  res.status(204).json();
};
