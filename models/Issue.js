import { Schema, model } from 'mongoose';

const issueSchema = new Schema(
  {
    owner: {
      type: Schema.Types.ObjectId,
      ref: 'user',
      // required: true,
    },
    email: {
      type: String,
      required: [true, 'Email is required'],
    },
    message: {
      type: String,
      required: [true, 'Message is required'],
    },
  },
  { versionKey: false, timestamps: true }
);

export const Issue = model('issue', issueSchema);
