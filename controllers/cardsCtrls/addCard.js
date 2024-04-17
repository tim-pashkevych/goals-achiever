import { cardsServices } from '../../services/index.js';

export const addCard = async (req, res, next) => {
  const newCard = await cardsServices.addCard(req.body);

  res.status(201).json({
    result: newCard,
  });
};
