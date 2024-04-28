import { Schema, model } from 'mongoose';

import { priority } from '../constants/index.js';

const cardSchema = new Schema(
  {
    title: {
      type: String,
      required: [true, 'title is required'],
    },
    description: {
      type: String,
      required: [true, 'description is required'],
    },
    priority: {
      type: String,
      enum: priority,
      required: [true, 'priority is required'],
    },
    deadline: {
      type: Date,
      required: [true, 'deadline is required'],
    },
    boardId: { type: Schema.Types.ObjectId, ref: 'board', required: true },
    columnId: { type: Schema.Types.ObjectId, ref: 'column', required: true },
    owner: { type: Schema.Types.ObjectId, ref: 'column', required: true },
  },
  { versionKey: false, timestamps: true }
);

export const Card = model('card', cardSchema);
