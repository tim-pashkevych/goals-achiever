import { addColumn } from './addColumn.js';
import { updateColumn } from './updateColumn.js';
import { deleteColumn } from './deleteColumn.js';

import ctrlWrapper from '../../decorators/ctrlWrapper.js';

export const columnsCtrls = {
  addColumn: ctrlWrapper(addColumn),
  updateColumn: ctrlWrapper(updateColumn),
  deleteColumn: ctrlWrapper(deleteColumn),
};
