import { boardsServices } from '../../services/index.js';

export const addBoard = async (req, res, next) => {
  const { _id: owner } = req.user;
  const newBoard = await boardsServices.addBoard({ ...req.body, owner });

  res.status(201).json({
    result: newBoard,
  });
};
