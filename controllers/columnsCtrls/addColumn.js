import { columnsServices } from '../../services/index.js';

export const addColumn = async (req, res, next) => {
  const { _id: owner } = req.user;
  const newColumn = await columnsServices.addColumn({ ...req.body, owner });

  res.status(201).json({
    result: newColumn,
  });
};
