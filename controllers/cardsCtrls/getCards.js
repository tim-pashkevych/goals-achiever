import { cardsServices } from '../../services/index.js';

export const getCards = async (req, res, next) => {
  const data = await cardsServices.getCards();
  res.json({
    result: data,
  });
};
