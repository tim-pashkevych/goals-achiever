import { User } from '../../models/User.js';

export const updateUser = async (id, data) => {
  return await User.findByIdAndUpdate(id, data, { new: true });
};
