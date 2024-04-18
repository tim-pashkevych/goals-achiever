import { addCard } from './addCard.js';
import { updateCard } from './updateCard.js';
import { deleteCard } from './deleteCard.js';
import { updateCardColumn } from './updateCardColumn.js';

import ctrlWrapper from '../../decorators/ctrlWrapper.js';

export const cardsCtrls = {
  addCard: ctrlWrapper(addCard),
  updateCard: ctrlWrapper(updateCard),
  deleteCard: ctrlWrapper(deleteCard),
  updateCardColumn: ctrlWrapper(updateCardColumn),
};
