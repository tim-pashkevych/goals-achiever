import { Card } from '../../models/Card.js';

export const getCards = async (filter = {}, query = {}) => {
  try {
    const data = await Card.find(filter, '', query);
    return data;
  } catch (error) {
    return null;
  }
};
