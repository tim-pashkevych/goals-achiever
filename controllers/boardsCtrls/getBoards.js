import { boardsServices } from '../../services/index.js';

export const getBoards = async (req, res, next) => {
  const boards = await boardsServices.getBoards({ owner: req.user });

  res.json({
    result: boards,
  });
};
