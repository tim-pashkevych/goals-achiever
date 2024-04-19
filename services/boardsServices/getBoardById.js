import { Board } from '../../models/Board.js';

export const getBoardById = async filter => {
  const board = await Board.findOne(filter);
  return board;
};
