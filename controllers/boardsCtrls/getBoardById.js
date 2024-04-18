import { boardsServices } from '../../services/index.js';

export const getBoardById = async (req, res, next) => {
  const { id } = req.params;

  const card = await boardsServices.getBoardById({ _id: id });

  res.json({
    result: card,
  });
};
