import { cardsServices } from '../../services/index.js';

export const updateCard = async (req, res, next) => {
  const data = req.body;
  const { id } = req.params;

  const updatedCard = await cardsServices.updateCard({ _id: id }, data);

  res.json({
    result: updatedCard,
  });
};
