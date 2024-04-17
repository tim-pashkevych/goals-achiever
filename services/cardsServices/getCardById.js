import { Card } from '../../models/Card.js';

export const getCardById = async filter => {
  try {
    const card = await Card.findOne(filter);
    return card;
  } catch (error) {
    return null;
  }
};
