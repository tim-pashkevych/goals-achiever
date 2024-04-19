import { Card } from '../../models/Card.js';
import { Column } from '../../models/Column.js';

export const moveCard = async (cardId, columnId, newColumnId) => {
  const movedCard = await Card.findOneAndUpdate(
    { _id: cardId },
    { columnId: newColumnId },
    {
      new: true,
      fields: 'columnId',
    }
  );
  if (movedCard) {
    await Column.findByIdAndUpdate(columnId, { $pull: { cards: cardId } });
    await Column.findByIdAndUpdate(newColumnId, { $push: { cards: cardId } });
  }

  return movedCard;
};
