import { getCards } from './getCards.js';
import { addCard } from './addCard.js';
import { updateCard } from './updateCard.js';
import { deleteCard } from './deleteCard.js';
import { getCardById } from './getCardByid.js';

import ctrlWrapper from '../../decorators/ctrlWrapper.js';

export const cardsCtrls = {
  getCards: ctrlWrapper(getCards),
  addCard: ctrlWrapper(addCard),
  updateCard: ctrlWrapper(updateCard),
  deleteCard: ctrlWrapper(deleteCard),
  getCardById: ctrlWrapper(getCardById),
};
