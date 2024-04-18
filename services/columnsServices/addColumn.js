import { Column } from '../../models/Column.js';

export const addColumn = async body => {
  const newColumn = await Column.create(body);
  return newColumn;
};
