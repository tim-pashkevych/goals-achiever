import { columnsServices } from '../../services/index.js';

export const updateColumn = async (req, res, next) => {
  const data = req.body;
  const { id } = req.params;

  // TODO: add a column owner validation
  // throw new HttpError(404, 'Column not found');
  // throw new HttpError(401, 'Not Authorized');

  const updatedColumn = await columnsServices.updateColumn({ _id: id }, data);

  res.json({
    result: updatedColumn,
  });
};
