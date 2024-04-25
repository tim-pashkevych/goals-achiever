import { usersServices } from '../../services/usersServices/index.js';
import { boardsServices } from '../../services/boardsServices/index.js';

export const getCurrentUser = async (req, res) => {
  let columns = [];
  let cards = [];
  const { _id: userId } = req.user;

  const { boards, ...user } = await usersServices.getCurrentUser({ _id: userId });
  if (!boards) {
    return res.json({
      result: { user, boards, columns, cards },
    });
  }

  const board = boards[0];
  if (!board) {
    return res.json({
      result: { user, boards, columns, cards },
    });
  }

  const boardsData = await boardsServices.getBoardById({ _id: board._id });
  if (!boardsData.columns) {
    return res.json({
      result: { user, boards, columns, cards },
    });
  }

  columns = boardsData.columns.map(column => ({
    _id: column._id,
    title: column.title,
    boardId: boardsData._id,
    createdAt: column.createdAt,
  }));

  cards = boardsData.columns.reduce((cards, column) => {
    column.cards.map(card => cards.push(card));
    return cards;
  }, []);

  res.json({
    result: { user, boards, columns, cards },
  });
};
