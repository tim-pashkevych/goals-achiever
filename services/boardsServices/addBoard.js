import { Board } from '../../models/Board.js';

export const addBoard = async body => {
  const newBoard = await Board.create(body);
  return newBoard;
};
