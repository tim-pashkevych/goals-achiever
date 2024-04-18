import { Schema, model } from 'mongoose';

const columnsSchema = new Schema(
  {
    title: {
      type: String,
      required: [true, 'title is required'],
    },
    cards: [{ type: Schema.Types.ObjectId, ref: 'card' }],
    boardId: [{ type: Schema.Types.ObjectId, ref: 'board' }],
    owner: {
      type: Schema.Types.ObjectId,
      ref: 'user',
      // required: true,
    },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

export const Column = model('column', columnsSchema);
