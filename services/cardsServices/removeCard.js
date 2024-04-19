import HttpError from '../../helpers/HttpError.js';
import { Card } from '../../models/Card.js';
import { Column } from '../../models/Column.js';

export const removeCard = async filter => {
  const result = await Card.findOneAndDelete(filter);
  if (result) {
    const { columnId, _id: id } = result;
    await Column.findByIdAndUpdate(columnId, { $pull: { cards: id } }, { new: true });
  }
  return result;
};
