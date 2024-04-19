import HttpError from '../../helpers/HttpError.js';
import { cardsServices } from '../../services/index.js';

export const updateCard = async (req, res, next) => {
  const data = req.body;
  const { id } = req.params;

  const updatedCard = await cardsServices.updateCard({ _id: id }, data);

  if (!updatedCard) throw HttpError(404);

  res.json({
    result: updatedCard,
  });
};
