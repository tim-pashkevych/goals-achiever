import { cardsServices } from '../../services/index.js';

export const addCard = async (req, res, next) => {
  const { columnId } = req.body;
  const { body } = req;

  const newCard = await cardsServices.addCard({ body }, columnId);

  res.status(201).json({
    result: newCard,
  });
};
