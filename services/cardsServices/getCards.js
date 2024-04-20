import { Card } from '../../models/Card.js';

export const getCards = async filter => {
  const cards = await Card.find(filter);
  return cards;
};
