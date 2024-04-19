import { CustomError, jwt, passwordSecurity } from '../../helpers/index.js';
import { User } from '../../models/index.js';
import { ISignInUser } from '../../types/index.js';

export const signIn = async (user: ISignInUser) => {
  const dbUser = await User.findOne({ email: user.email });

  if (!dbUser) {
    const authenticationError = new CustomError(401, 'Email or password is wrong');
    throw authenticationError;
  }

  const result = await passwordSecurity.comparePasswords(user.password, dbUser.password);
  if (!result) {
    const authenticationError = new CustomError(401, 'Email or password is wrong');
    throw authenticationError;
  }

  const token = jwt.generateToken(dbUser._id.toString());

  const loggedInUser = await User.findByIdAndUpdate(dbUser._id, { token }, { new: true });

  return {
    token: loggedInUser!.token,
    user: {
      name: loggedInUser!.name,
      email: loggedInUser!.email,
      avatarURL: loggedInUser!.avatarURL,
    },
  };
};

export const signOut = async (id: string) => {
  const user = await User.findById(id);

  if (!user) {
    const notAuthorizedError = new CustomError(401, 'Not authorized');
    throw notAuthorizedError;
  }

  const result = await User.findByIdAndUpdate(id, { token: '' }, { new: true });
  if (result) {
    return true;
  } else {
    return false;
  }
};
