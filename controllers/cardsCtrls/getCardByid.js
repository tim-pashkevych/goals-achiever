import { cardsServices } from '../../services/index.js';

export const getCardById = async (req, res, next) => {
  const { id } = req.params;

  const card = await cardsServices.getCardById({ _id: id });

  res.json({
    result: card,
  });
};
