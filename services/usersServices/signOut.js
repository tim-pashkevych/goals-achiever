import { User } from '../../models/index.js';

export const signOut = async id => {
  const result = await User.findByIdAndUpdate(id, { token: null, refreshToken: null }, { new: true });
  if (result) {
    return true;
  } else {
    return false;
  }
};
