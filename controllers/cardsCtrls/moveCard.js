import { cardsServices } from '../../services/index.js';

export const moveCard = async (req, res, next) => {
  const { id: cardId } = req.params;
  const { newColumnId, oldColumnId } = req.body;
  const card = await cardsServices.moveCard(cardId, oldColumnId, newColumnId);

  res.json({
    result: card,
  });
};
