import { register } from './register.js';
import { updateUserInfo } from './updateUserInfo.js';
import { updateUserTheme } from './updateUserTheme.js';
import { usersLogin } from './usersLogin.js';
import { usersLogout } from './usersLogout.js';
import { getCurrentUser } from './getCurrentUser.js';

import ctrlWrapper from '../../decorators/ctrlWrapper.js';

export const usersControllers = {
  register: ctrlWrapper(register),
  updateUserInfo: ctrlWrapper(updateUserInfo),
  updateUserTheme: ctrlWrapper(updateUserTheme),
  usersLogin: ctrlWrapper(usersLogin),
  usersLogout: ctrlWrapper(usersLogout),
  getCurrentUser: ctrlWrapper(getCurrentUser),
};
