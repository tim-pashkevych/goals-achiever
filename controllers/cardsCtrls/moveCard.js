import HttpError from '../../helpers/HttpError.js';
import { cardsServices } from '../../services/index.js';

export const moveCard = async (req, res, next) => {
  const { id: cardId } = req.params;
  const { columnId, newColumnId } = req.body;
  const card = await cardsServices.moveCard(cardId, columnId, newColumnId);

  if (!card) throw HttpError(404);
  res.json({
    result: card,
  });
};
