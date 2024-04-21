import jwt from 'jsonwebtoken';

import HttpError from '../helpers/HttpError.js';
import { usersServices } from '../services/index.js';

const { JWT_SECRET } = process.env;

const authenticate = async (req, _, next) => {
  const { authorization } = req.headers;

  if (!authorization) {
    return next(HttpError(401, 'Authorization header not found'));
  }

  const [bearer, token] = authorization.split(' ');

  if (bearer !== 'Bearer') {
    return next(HttpError(401, 'Bearer not found'));
  }

  if (!token) {
    return next(HttpError(401, 'Token is absent in the authorization header.'));
  }

  try {
    const { id } = jwt.verify(token, JWT_SECRET);

    const user = await usersServices.searchUser({ _id: id });

    if (!user) {
      return next(HttpError(401, 'Not authorized'));
    }

    if (!user.token) {
      return next(HttpError(401, 'Not authorized'));
    }

    if (user.token !== token) {
      return next(HttpError(401, 'Not authorized'));
    }

    req.user = user;
    next();
  } catch (error) {
    next(HttpError(401, error.message));
  }
};

export default authenticate;
