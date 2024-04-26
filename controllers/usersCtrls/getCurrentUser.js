import { usersServices } from '../../services/usersServices/index.js';
import { boardsServices } from '../../services/boardsServices/index.js';

export const getCurrentUser = async (req, res) => {
  const { _id: userId } = req.user;

  const { boards: boardsData, ...user } = await usersServices.getCurrentUser({ _id: userId });
  if (!boardsData) {
    return res.json({
      result: { user, boards: [], columns: [], cards: [] },
    });
  }

  const board = boardsData[0];
  if (!board) {
    return res.json({
      result: { user, boards: [], columns: [], cards: [] },
    });
  }
  const boards = boardsData.map(item => ({ ...item, active: item._id === board._id }));

  const boardData = await boardsServices.getBoardById({ _id: board._id });
  if (!boardData.columns) {
    return res.json({
      result: { user, boards, columns: [], cards: [] },
    });
  }

  const columns = boardData.columns.map(column => ({
    _id: column._id,
    title: column.title,
    boardId: boardData._id,
    createdAt: column.createdAt,
  }));

  const cards = boardData.columns.reduce((cards, column) => {
    column.cards.map(card => cards.push(card));
    return cards;
  }, []);

  res.json({
    result: { user, boards, columns, cards },
  });
};
