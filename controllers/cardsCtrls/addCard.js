import { cardsServices } from '../../services/index.js';

export const addCard = async (req, res, next) => {
  const { boardId, columnId } = req.params;

  const newCard = await cardsServices.addCard({ ...req.body, boardId, columnId });

  res.status(201).json({
    result: newCard,
  });
};
