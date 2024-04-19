import { Column } from '../../models/Column.js';

export const getColumnById = async filter => {
  const column = await Column.findOne(filter);
  return column;
};
