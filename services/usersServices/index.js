import { createUser } from './createUser';
import { searchUser } from './searchUser.js';
import { updateUser } from './updateUser.js';
import { validatePassword } from './validatePassword.js';

export const usersServices = {
  createUser: createUser,
  searchUser: searchUser,
  updateUser: updateUser,
  validatePassword: validatePassword,
};
