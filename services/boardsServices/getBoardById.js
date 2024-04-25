import { Board } from '../../models/Board.js';

export const getBoardById = async filter => {
  const board = await Board.findOne(filter)
    .select('_id title icon  backgroundImage')
    .populate({
      path: 'columns',
      select: '_id title cards createdAt',
      populate: {
        path: 'cards',
        select: '_id columnId title description priority deadline createdAt',
      },
    });
  return board;
};
