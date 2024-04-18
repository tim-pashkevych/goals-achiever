import { Schema, model } from 'mongoose';

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
      required: false,
    },
    createdAt: { type: Date },
    updatedAt: { type: Date },
  },
  { versionKey: false, timestamps: true }
);

export const User = model('user', userSchema);
