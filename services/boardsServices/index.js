import { getBoards } from './getBoards.js';
import { getBoardById } from './getBoardById.js';
import { addBoard } from './addBoard.js';
import { removeBoard } from './removeBoard.js';
import { updateBoard } from './updateBoard.js';

export const boardsServices = {
  getBoardById,
  addBoard,
  removeBoard,
  updateBoard,
  getBoards,
};
