import { User } from '../../models/User.js';

export const searchUser = filter => {
  return User.findOne(filter);
};
