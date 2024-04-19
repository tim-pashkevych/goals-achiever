import { cardsServices } from '../../services/index.js';

export const moveCard = async (req, res, next) => {
  const { id: cardId } = req.params;
  const { columnId, newColumnId } = req.body;
  const card = await cardsServices.moveCard(cardId, columnId, newColumnId);

  res.json({
    result: card,
  });
};
