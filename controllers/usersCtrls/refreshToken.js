import HttpError from '../../helpers/HttpError.js';
import jwt from '../../helpers/jwt.js';
import { User } from '../../models/User.js';
import { usersServices } from '../../services/index.js';

export const refreshToken = async (req, res, next) => {
  let { refreshToken } = req.body;
  try {
    const { id } = jwt.verifyToken(refreshToken);
    const user = await usersServices.searchUser({ _id: id });

    if (!user) {
      return next(HttpError(401, 'Not authorized'));
    }

    if (!user.refreshToken) {
      return next(HttpError(401, 'Not authorized'));
    }

    if (user.refreshToken !== refreshToken) {
      return next(HttpError(401, 'Not authorized'));
    }

    const token = jwt.generateToken(user._id);
    refreshToken = jwt.generateToken(user._id, 720);

    const loggedInUser = await User.findByIdAndUpdate(user._id, { token, refreshToken }, { new: true });

    res.json({
      result: {
        token,
        refreshToken,
        user: {
          name: loggedInUser.name,
          email: loggedInUser.email,
          theme: loggedInUser.theme,
          avatarURL: loggedInUser.avatarURL,
        },
      },
    });
  } catch (error) {
    throw HttpError(401, error.message);
  }
};
