import { Column } from '../../models/Column.js';
import { Board } from '../../models/Board.js';

export const removeColumn = async filter => {
  const result = await Column.findOneAndDelete(filter);

  const { boardId } = result;

  const id = filter._id;

  await Board.findByIdAndUpdate(boardId, { $pull: { columns: { $in: [id] } } }, { new: true });
  return result;
};
