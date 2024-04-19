import { Schema, model } from 'mongoose';
import { themes } from '../constants/index.js';

const userSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: [true, 'Email is required'],
      unique: true,
    },
    password: {
      type: String,
      required: [true, 'Password is required'],
    },
    avatarURL: {
      type: String,
      default: 'https://www.w3schools.com/howto/img_avatar.png',
    },
    theme: {
      type: String,
      enum: themes,
      required: [true, 'Theme is required'],
    },
    boards: [
      {
        type: Schema.Types.ObjectId,
        ref: 'board',
      },
    ],
    token: {
      type: String,
      default: null,
    },
  },
  { versionKey: false, timestamps: true }
);

export const User = model('user', userSchema);
