import { boardsServices } from '../../services/index.js';

export const updateBoard = async (req, res, next) => {
  const data = req.body;
  const { id } = req.params;

  const updatedBoard = await boardsServices.updateBoard({ _id: id }, data);

  res.json({
    result: updatedBoard,
  });
};
