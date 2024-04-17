import { Card } from '../../models/Card.js';

export const addCard = async body => {
  try {
    const newCard = await Card.create(body);
    return newCard;
  } catch (error) {
    return null;
  }
};
