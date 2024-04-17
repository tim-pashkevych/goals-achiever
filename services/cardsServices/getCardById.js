import { Card } from '../../models/Card.js';

export const getCardById = async filter => {
  const card = await Card.findOne(filter);
  return card;
};
