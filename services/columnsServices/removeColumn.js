import { Column } from '../../models/Column.js';
import { Board } from '../../models/Board.js';
import { Card } from '../../models/Card.js';

export const removeColumn = async filter => {
  const result = await Column.findOneAndDelete(filter);
  if (result) {
    const { boardId, _id: columnId } = result;
    await Card.deleteMany({ columnId });
    await Board.findByIdAndUpdate(boardId, { $pull: { columns: { $in: [columnId] } } }, { new: true });
  }
  return result;
};
