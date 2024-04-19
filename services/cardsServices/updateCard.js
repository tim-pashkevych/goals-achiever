import { Card } from '../../models/Card.js';

export const updateCard = async (filter, data) => {
  const updatedCard = await Card.findOneAndUpdate(filter, data, {
    new: true,
    fields: ['title', 'description', 'priority', 'deadline'],
  });
  return updatedCard;
};
