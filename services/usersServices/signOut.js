import { jwt, passwordSecurity } from '../../helpers/index.js';
import { User } from '../../models/index.js';

export const signOut = async id => {
  const user = await User.findById(id);

  if (!user) {
    const error = new Error('Not authorized');
    error.status = 401;

    throw error;
  }

  const result = await User.findByIdAndUpdate(id, { token: null }, { new: true });
  if (result) {
    return true;
  } else {
    return false;
  }
};
