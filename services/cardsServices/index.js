import { getCards } from './getCards.js';
import { getCardById } from './getCardById.js';
import { addCard } from './addCard.js';
import { removeCard } from './removeCard.js';
import { updateCard } from './updateCard.js';

export const cardsServices = {
  getCards: getCards,
  getCardById: getCardById,
  addCard: addCard,
  removeCard: removeCard,
  updateCard: updateCard,
};
