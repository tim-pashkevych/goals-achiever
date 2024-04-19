import { Card } from '../../models/Card.js';
import { Column } from '../../models/Column.js';

export const removeCard = async (filter, columnId) => {
  const result = await Card.findOneAndDelete(filter);
  const id = filter._id;
  await Column.findByIdAndUpdate(columnId, { $pull: { cards: { $in: [id] } } }, { new: true });
  return result;
};
