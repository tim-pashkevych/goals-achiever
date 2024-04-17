import { Card } from '../../models/Card.js';

export const removeCard = async filter => {
  const result = await Card.findOneAndDelete(filter);
  return result;
};
