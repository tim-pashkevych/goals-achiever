import { columnsServices } from '../../services/index.js';

export const addColumn = async (req, res, next) => {
  const newColumn = await columnsServices.addColumn(req.body);

  res.status(201).json({
    result: newColumn,
  });
};
