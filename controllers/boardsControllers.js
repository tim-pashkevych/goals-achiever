import mongoose from 'mongoose';
import ctrlWrapper from '../decorators/ctrlWrapper.js';
import Board from '../models/boardsModel.js';
import HttpError from '../helpers/HttpError.js';

const createBoard = async (req, res) => {
  const { owner } = req.body;

  let data = req.body;

  if (!mongoose.Types.ObjectId.isValid(owner)) throw HttpError(400);

  if (typeof owner === 'string') {
    data = {
      ...req.body,
      owner: new mongoose.Types.ObjectId(req.body.owner),
    };
  }

  const result = await Board.create(data);
  res.status(201).json(result);
};

const changeOwner = async (req, res) => {
  const { id, owner } = req.body;

  const result = await Board.findByIdAndUpdate(id, {
    owner,
  });

  res.status(200).json(result);
};

const changeTitle = async (req, res) => {
  const { id, title } = req.body;

  const result = await Board.findByIdAndUpdate(id, {
    title,
  });

  res.status(200).json(result);
};

const changeIcon = async (req, res) => {
  const { id, icon } = req.body;

  const result = await Board.findByIdAndUpdate(id, {
    icon,
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

  let resColumnId = columnId;

  if (!mongoose.Types.ObjectId.isValid(boardId)) throw HttpError(400);

  if (typeof columnId === 'string') {
    resColumnId = new mongoose.Types.ObjectId(columnId);
  }

  columns.push(resColumnId);
  await Board.findByIdAndUpdate(boardId, { columns });
  res.sendStatus(201);
};

const deleteColumn = async (req, res) => {
  const { boardId, columnId } = req.params;
  const { columns } = await Board.findById(boardId);

  let resColumnId = columnId;

  if (!mongoose.Types.ObjectId.isValid(boardId)) throw HttpError(400);

  if (typeof columnId === 'string') {
    resColumnId = new mongoose.Types.ObjectId(columnId);
  }

  const filteredColumns = columns.filter(id => !id.equals(resColumnId));
  await Board.findByIdAndUpdate(boardId, { columns: filteredColumns });
  res.sendStatus(204);
};

export default {
  createBoard: ctrlWrapper(createBoard),
  deleteBoard: ctrlWrapper(deleteBoard),
  changeOwner: ctrlWrapper(changeOwner),
  changeTitle: ctrlWrapper(changeTitle),
  changeIcon: ctrlWrapper(changeIcon),
  deleteColumn: ctrlWrapper(deleteColumn),
  addColumn: ctrlWrapper(addColumn),
};
