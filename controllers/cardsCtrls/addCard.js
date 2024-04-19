import { cardsServices } from '../../services/index.js';

export const addCard = async (req, res, next) => {
  const { body } = req;
  const { _id: owner } = req.user;
  const newCard = await cardsServices.addCard({ ...body, owner });

  res.status(201).json({
    result: newCard,
  });
};
