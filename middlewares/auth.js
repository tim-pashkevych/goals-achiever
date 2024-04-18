import { jwt, CustomError } from '../helpers/index.js';
import { User } from '../models/index.js';
import { ctrlWrapper } from '../decorators/index.js';

const auth = async (req, _, next) => {
  const { authorization } = req.headers;

  if (!authorization) {
    const authorizationError = new CustomError(401, "Authorization header wasn't found");
    throw authorizationError;
  }

  const [bearer, token] = authorization.split(' ');

  if (!bearer) {
    const bearerError = new CustomError(401, 'Bearer is absent in the authorization header.');
    throw bearerError;
  }

  if (!token) {
    const tokenError = new CustomError(401, 'Token is absent in the authorization header.');
    throw tokenError;
  }

  const id = jwt.verifyToken(token);

  const user = await User.findById(id).select('name email avatarURL theme boards token');

  if (!user) {
    const userError = new CustomError(401, 'User not found');
    throw userError;
  }

  if (!user.token) {
    const userSignOutError = new CustomError(401, 'User already signout');
    throw userSignOutError;
  }

  if (user.token === token) {
    req.user = user;
    next();
  } else {
    const notAuthorizedError = new CustomError(401, 'Not authorized');
    throw notAuthorizedError;
  }
};

export default ctrlWrapper(auth);
