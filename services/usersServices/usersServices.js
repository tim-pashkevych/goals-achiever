import { jwt, passwordSecurity } from '../../helpers/index.js';
import { User } from '../../models/index.js';

export const signIn = async user => {
  const dbUser = await User.findOne({ email: user.email });

  if (!dbUser) {
    const authenticationError = new Error('Email or password is wrong');
    authenticationError.status = 401;

    throw authenticationError;
  }

  const result = await passwordSecurity.comparePasswords(user.password, dbUser.password);
  if (!result) {
    const authenticationError = new Error('Email or password is wrong');
    authenticationError.status = 401;

    throw authenticationError;
  }

  const token = jwt.generateToken(dbUser._id);

  const loggedInUser = await User.findByIdAndUpdate(dbUser._id, { token }, { new: true });

  return {
    token: loggedInUser.token,
    user: {
      name: loggedInUser.name,
      email: loggedInUser.email,
      avatarURL: loggedInUser.avatarURL,
    },
  };
};

export const signOut = async id => {
  const user = await User.findById(id);

  if (!user) {
    const error = new Error('Not authorized');
    error.status = 401;

    throw error;
  }

  const result = await User.findByIdAndUpdate(id, { token: '' }, { new: true });
  if (result) {
    return true;
  } else {
    return false;
  }
};
