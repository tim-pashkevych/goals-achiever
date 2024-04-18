import { Board } from '../../models/Board.js';

export const getBoardById = async filter => {
  const card = await Board.findOne(filter);
  return card;
};
