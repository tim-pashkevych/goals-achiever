import { Schema, model } from 'mongoose';

import { priority } from '../constants/index.js';

const cardShema = new Schema(
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
      type: String,
      required: [true, 'deadline is required'],
    },
  },
  { versionKey: false, timestamps: true }
);

export const Card = model('card', cardShema);
