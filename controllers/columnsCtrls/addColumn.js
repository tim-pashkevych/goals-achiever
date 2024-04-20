import { columnsServices } from '../../services/index.js';

export const addColumn = async (req, res, next) => {
  const { _id: owner } = req.user;

  const { boardId } = req.body;

  const newColumn = await columnsServices.addColumn({ ...req.body, owner }, boardId);

  res.status(201).json({
    result: newColumn,
  });
};
