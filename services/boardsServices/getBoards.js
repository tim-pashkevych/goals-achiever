import { Board } from '../../models/Board.js';

export const getBoards = async filter => {
  const boards = await Board.find(filter);
  return boards;
};
