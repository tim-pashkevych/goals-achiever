import { Board } from '../../models/Board.js';
import { User } from '../../models/User.js';

export const addBoard = async body => {
  const newBoard = await Board.create(body);
  const { owner: _id, _id: boardId } = newBoard;
  await User.findByIdAndUpdate(_id, { $push: { boards: boardId } });
  return newBoard;
};
