import ctrlWrapper from '../decorators/ctrlWrapper.js';
import { Column } from '../models/columnModel.js';
import HttpError from '../helpers/HttpError.js';

const createColumn = async (req, res) => {
  const result = await Column.create(req.body);
  res.status(201).json(result);
};

const updateColumn = async (req, res) => {
  const { id, ...rest } = req.body;

  const updatedColumn = await Column.findByIdAndUpdate(
    id,
    { ...rest },
    { new: true }
  );

  if (!updatedColumn) {
    throw new HttpError(404, 'Column not found');
  }

  res.status(200).json(updatedColumn);
};

const deleteColumn = async (req, res) => {
  const deletedColumn = await Column.findByIdAndDelete(req.params.id);

  if (!deletedColumn) {
    throw new HttpError(404, 'Column not found');
  }

  res.status(204);
};

export default {
  createColumn: ctrlWrapper(createColumn),
  updateColumn: ctrlWrapper(updateColumn),
  deleteColumn: ctrlWrapper(deleteColumn),
};
