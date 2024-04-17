import { getCards } from './getCards.js';
import { addCard } from './addCard.js';
import { updateCard } from './updateCard.js';
import { deleteCard } from './deleteCard.js';
import { getCardById } from './getCardByid.js';

export const cardsCtrls = {
  getCards: getCards,
  addCard: addCard,
  updateCard: updateCard,
  deleteCard: deleteCard,
  getCardById: getCardById,
};
