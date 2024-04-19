import { jwt, CustomError } from '../helpers/index.js';
import { User } from '../models/index.js';
import { ctrlWrapper } from '../decorators/index.js';
import { NextFunction, Request, Response } from 'express';

const auth = async (req: Request, _: Response, next: NextFunction) => {
  const { authorization } = req.headers;

  if (!authorization) {
    const authorizationError = new CustomError(401, "Authorization header wasn't found");
    throw authorizationError;
  }

  const [bearer, token] = authorization.split(' ');

  if (!(bearer === 'bearer' || bearer === 'Bearer')) {
    const bearerError = new CustomError(401, 'Bearer is absent in the authorization header.');
    throw bearerError;
  }

  if (!token) {
    const tokenError = new CustomError(401, 'Token is absent in the authorization header.');
    throw tokenError;
  }

  const { id } = jwt.verifyToken(token);

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
