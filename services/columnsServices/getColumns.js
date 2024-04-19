import { Column } from '../../models/Column.js';

export const getColumns = async filter => {
  const columns = await Column.find(filter);
  return columns;
};
