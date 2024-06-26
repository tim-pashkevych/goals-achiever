import { getBoards } from './getBoards.js';
import { addBoard } from './addBoard.js';
import { updateBoard } from './updateBoard.js';
import { deleteBoard } from './deleteBoard.js';
import { getBoardById } from './getBoardById.js';

import ctrlWrapper from '../../decorators/ctrlWrapper.js';

export const boardsCtrls = {
  getBoards: ctrlWrapper(getBoards),
  addBoard: ctrlWrapper(addBoard),
  updateBoard: ctrlWrapper(updateBoard),
  deleteBoard: ctrlWrapper(deleteBoard),
  getBoardById: ctrlWrapper(getBoardById),
};
