import { Board } from '../../models/Board.js';
import { Card } from '../../models/Card.js';
import { Column } from '../../models/Column.js';
import { User } from '../../models/User.js';

export const removeBoard = async filter => {
  const result = await Board.findOneAndDelete(filter);
  if (result) {
    const { _id: boardId, owner: _id } = result;

    await User.findByIdAndUpdate(_id, { $pull: { boards: boardId } });
    await Card.deleteMany({ boardId });
    await Column.deleteMany({ boardId });
  }
  return result;
};
