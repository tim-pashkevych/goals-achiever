import { cardsServices } from '../../services/index.js';

export const addCard = async (req, res, next) => {
  const { columnId } = req.body;
  const { body } = req;
  const { _id: owner } = req.user;
  const newCard = await cardsServices.addCard({ ...body, owner }, columnId);

  res.status(201).json({
    result: newCard,
  });
};
