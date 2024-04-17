import { getCards } from './getCards.js';
import { getCardById } from './getCardById.js';
import { addCard } from './addCard.js';
import { removeCard } from './removeCard.js';
import { upgrateCard } from './upgrateCard.js';

export const cardsSercices = {
  getCards: getCards,
  getCardById: getCardById,
  addCard: addCard,
  removeCard: removeCard,
  upgrateCard: upgrateCard,
};
