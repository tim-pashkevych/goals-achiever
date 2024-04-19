import { register } from './register.js';
import { updateAvatar } from './updateAvatar.js';
import { updateUserInfo } from './updateUserInfo.js';

import ctrlWrapper from '../../decorators/ctrlWrapper.js';

export const usersControllers = {
  register: ctrlWrapper(register),
  updateAvatar: ctrlWrapper(updateAvatar),
  updateUserInfo: ctrlWrapper(updateUserInfo),
};
