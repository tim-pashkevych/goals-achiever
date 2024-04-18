import { cardsServices } from '../../services/index.js';

export const updateCardColumn = async (req, res, next) => {
  const { id } = req.params;

  const card = await cardsServices.updateCard({ _id: id }, req.body);

  res.json({
    result: card,
  });
};
