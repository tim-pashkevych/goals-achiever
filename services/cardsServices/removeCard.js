import { Card } from '../../models/Card.js';

export const removeCard = async filter => {
  try {
    const result = await Card.findOneAndDelete(filter);
    return result;
  } catch (error) {
    return null;
  }
};
