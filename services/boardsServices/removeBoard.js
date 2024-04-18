import { Board } from '../../models/Board.js';

export const removeBoard = async filter => {
  const result = await Board.findOneAndDelete(filter);
  return result;
};
