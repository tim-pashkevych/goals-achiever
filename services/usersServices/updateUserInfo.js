import { User } from '../../models/User.js';

export const updateUserInfo = async (id, data) => {
  try {
    return await User.findByIdAndUpdate(id, data, { new: true, select: 'name email avatarURL' });
  } catch (error) {
    return null;
  }
};
