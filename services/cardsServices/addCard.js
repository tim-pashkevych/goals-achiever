import { Card } from '../../models/Card.js';
import { Column } from '../../models/Column.js';

export const addCard = async body => {
  const newCard = await Card.create(body);
  const { columnId, _id: id } = newCard;
  await Column.findByIdAndUpdate(columnId, { $push: { cards: id } }, { new: true });
  return newCard;
};
