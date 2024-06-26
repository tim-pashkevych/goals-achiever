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
  const refreshToken = jwt.generateToken(dbUser._id, 720);

  const loggedInUser = await User.findByIdAndUpdate(dbUser._id, { token, refreshToken }, { new: true });

  return {
    token: loggedInUser.token,
    refreshToken: loggedInUser.refreshToken,
    user: {
      name: loggedInUser.name,
      email: loggedInUser.email,
      theme: loggedInUser.theme,
      avatarURL: loggedInUser.avatarURL,
    },
  };
};
