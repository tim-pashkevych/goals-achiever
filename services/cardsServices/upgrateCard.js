import { Card } from '../../models/Card.js';

export const upgrateCard = async (filter, data) => {
  const upgratedCard = await Card.findOneAndUpdate(filter, data, {
    new: true,
  });
  return upgratedCard;
};
