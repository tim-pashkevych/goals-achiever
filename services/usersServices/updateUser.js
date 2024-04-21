import { User } from '../../models/User.js';

export const updateUser = async (id, data) => {
  try {
    return await User.findByIdAndUpdate(id, data, { new: true });
  } catch (error) {
    return null;
  }
};
