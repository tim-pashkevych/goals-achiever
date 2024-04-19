import { createUser } from './createUser.js';
import { searchUser } from './searchUser.js';
import { updateUser } from './updateUser.js';
import { uploadAvatar } from './uploadAvatar.js';
import { validatePassword } from './validatePassword.js';

export const usersServices = {
  createUser: createUser,
  searchUser: searchUser,
  updateUser: updateUser,
  uploadAvatar: uploadAvatar,
  validatePassword: validatePassword,
};
