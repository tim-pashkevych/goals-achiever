import { Column } from '../../models/Column.js';

export const removeColumn = async filter => {
  const result = await Column.findOneAndDelete(filter);
  return result;
};
