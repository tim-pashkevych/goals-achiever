import { Schema, model } from 'mongoose';
import { emailRegExp, themes } from '../constants/index.js';

const userSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: [true, 'Email is required'],
      match: emailRegExp,
      unique: true,
    },
    password: {
      type: String,
      required: [true, 'Password is required'],
    },
    cloudinaryPublicId: { type: String },
    avatarURL: {
      type: String,
      default: null,
    },
    theme: {
      type: String,
      enum: themes,
      default: themes[0],
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
    refreshToken: {
      type: String,
      default: null,
    },
  },
  { versionKey: false, timestamps: true }
);

export const User = model('user', userSchema);
