import { User } from '../../models/User.js';

export const searchUser = async filter => {
  return await User.findOne(filter);
};
