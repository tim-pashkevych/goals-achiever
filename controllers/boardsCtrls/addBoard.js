import { boardsServices } from '../../services/index.js';

export const addBoard = async (req, res, next) => {
  const newBoard = await boardsServices.addBoard(req.body);

  res.status(201).json({
    result: newBoard,
  });
};
