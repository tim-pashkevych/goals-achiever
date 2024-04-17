import mongoose from 'mongoose';
import ctrlWrapper from '../decorators/ctrlWrapper.js';
import Board from '../models/boardsModel.js';
import HttpError from '../helpers/HttpError.js';

const createBoard = async (req, res) => {
  const result = await Board.create(req.body);
  res.status(201).json(result);
};

const update = async (req, res) => {
  const { id, ...rest } = req.body;

  const result = await Board.findByIdAndUpdate(id, {
    ...rest,
  });

  res.status(200).json(result);
};

const deleteBoard = async (req, res) => {
  await Board.findByIdAndDelete(req.params.id);
  res.sendStatus(204);
};

const addColumn = async (req, res) => {
  const { columnId, boardId } = req.body;
  const { columns } = await Board.findById(boardId);

  columns.push(columnId);
  await Board.findByIdAndUpdate(boardId, { columns });
  res.sendStatus(201);
};

const deleteColumn = async (req, res) => {
  const { boardId, columnId } = req.params;
  const { columns } = await Board.findById(boardId);

  let resColumnId = columnId;

  const filteredColumns = columns.filter(id => !id.equals(resColumnId));
  await Board.findByIdAndUpdate(boardId, { columns: filteredColumns });
  res.sendStatus(204);
};

export default {
  createBoard: ctrlWrapper(createBoard),
  update: ctrlWrapper(update),
  deleteBoard: ctrlWrapper(deleteBoard),
  deleteColumn: ctrlWrapper(deleteColumn),
  addColumn: ctrlWrapper(addColumn),
};
