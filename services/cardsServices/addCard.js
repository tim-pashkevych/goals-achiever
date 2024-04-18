import { Card } from '../../models/Card.js';
import { Column } from '../../models/Column.js';

export const addCard = async (body, columnId) => {
  const newCard = await Card.create(body);
  const id = newCard._id;
  await Column.findByIdAndUpdate(columnId, { $push: { cards: id } }, { new: true });
  return newCard;
};
