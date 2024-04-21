import { columnsServices } from '../../services/index.js';

export const updateColumn = async (req, res, next) => {
  const data = req.body;
  const { id } = req.params;

  const updatedColumn = await columnsServices.updateColumn({ _id: id }, data);

  res.json({
    result: updatedColumn,
  });
};
