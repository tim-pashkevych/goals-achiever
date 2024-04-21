import { Column } from '../../models/Column.js';

export const updateColumn = async (filter, data) => {
  const updatedColumn = await Column.findOneAndUpdate(filter, data, {
    new: true,
  });

  return updatedColumn;
};
