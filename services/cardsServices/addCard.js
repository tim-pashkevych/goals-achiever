import { Card } from '../../models/Card.js';

export const addCard = async body => {
  const newCard = await Card.create(body);
  return newCard;
};
