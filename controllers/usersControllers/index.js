import { register } from './register.js';
import { updateUserInfo } from './updateUserInfo.js';

import ctrlWrapper from '../../decorators/ctrlWrapper.js';

export const usersControllers = {
  register: ctrlWrapper(register),
  updateUserInfo: ctrlWrapper(updateUserInfo),
};
