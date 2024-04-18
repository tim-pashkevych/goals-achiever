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
      required: [true, 'Background is required'],
    },
    backgroundImageUrl: {
      type: String,
      required: [true, 'Background is required'],
    },
  },
  { versionKey: false, timestamps: true }
);

export const Board = model('board', boardSchema);
