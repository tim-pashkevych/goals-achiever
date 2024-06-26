import { getCards } from './getCards.js';
import { addCard } from './addCard.js';
import { removeCard } from './removeCard.js';
import { updateCard } from './updateCard.js';
import { moveCard } from './moveCard.js';

export const cardsServices = {
  getCards: getCards,
  addCard: addCard,
  removeCard: removeCard,
  updateCard: updateCard,
  moveCard: moveCard,
};
