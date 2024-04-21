import { Schema, model } from 'mongoose';

const boardSchema = new Schema(
  {
    owner: {
      type: Schema.Types.ObjectId,
      ref: 'user',
      required: true,
    },
    columns: [{ type: Schema.Types.ObjectId, ref: 'column' }],

    title: {
      type: String,
      required: [true, 'Title is required'],
    },
    icon: {
      type: String,
      required: [true, 'Icon is required'],
    },
    backgroundImage: {
      type: String,
      required: [true, 'Background image is required'],
    },
  },
  { versionKey: false, timestamps: true }
);

export const Board = model('board', boardSchema);
