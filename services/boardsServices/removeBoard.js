import { Board } from '../../models/Board.js';
import { removeColumn } from '../columnsServices/removeColumn.js';

export const removeBoard = async filter => {
  const result = await Board.findOneAndDelete(filter);
  result.columns.forEach(async _id => {
    await removeColumn({ _id });
  });
  return result;
};
