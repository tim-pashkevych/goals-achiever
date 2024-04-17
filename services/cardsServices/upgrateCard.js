import { Card } from '../../models/Card.js';

export const upgrateCard = async filter => {
  try {
    const upgratedCard = await Card.findOneAndUpdate(filter, data, {
      new: true,
    });
    return upgratedCard;
  } catch (error) {
    return null;
  }
};
x``;
