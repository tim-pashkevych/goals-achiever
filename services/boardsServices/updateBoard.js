import { Board } from '../../models/Board.js';

export const updateBoard = async (filter, data) => {
  const updatedBoard = await Board.findOneAndUpdate(filter, data, {
    new: true,
  });
  return updatedBoard;
};
