import { Card } from '../../models/Card.js';

export const getCards = async (filter = {}, query = {}) => {
  const data = await Card.find(filter, '', query);
  return data;
};
