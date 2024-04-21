import { Board } from '../../models/Board.js';
import { Card } from '../../models/Card.js';
import { Column } from '../../models/Column.js';
import { removeColumn } from '../columnsServices/removeColumn.js';

export const removeBoard = async filter => {
  const result = await Board.findOneAndDelete(filter);
  if (result) {
    const { _id: boardId } = result;
    await Card.deleteMany({ boardId });
    await Column.deleteMany({ boardId });
  }
  return result;
};
