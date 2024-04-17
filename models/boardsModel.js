import { Schema, model } from 'mongoose';

const boardsSchema = new Schema(
  {
    backgroundImageUrl: {
      type: String,
    },
    icon: {
      type: String,
    },
    title: {
      type: String,
    },
    columns: [{ type: Schema.Types.ObjectId, ref: 'column' }],
    owner: {
      type: Schema.Types.ObjectId,
      ref: 'user',
      required: true,
    },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

const Board = model('board', boardsSchema);

export default Board;
