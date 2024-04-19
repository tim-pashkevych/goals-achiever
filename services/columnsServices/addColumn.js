import { Column } from '../../models/Column.js';

import { Board } from '../../models/Board.js';

export const addColumn = async body => {
  const newColumn = await Column.create(body);
  const { boardId } = body;
  const id = newColumn._id;

  await Board.findByIdAndUpdate(boardId, { $push: { columns: id } }, { new: true });

  return newColumn;
};
