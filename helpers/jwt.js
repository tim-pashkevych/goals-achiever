import jwt from 'jsonwebtoken';

import { CustomError } from '../helpers/index.js';

const { JWT_SECRET } = process.env;

export const generateToken = id => {
  const payload = { id };
  const token = jwt.sign(payload, JWT_SECRET, { expiresIn: '12h' });

  return token;
};

export const verifyToken = token => {
  try {
    const data = jwt.verify(token, JWT_SECRET);
    return data;
  } catch (error) {
    const authorizationError = new CustomError(401, 'Not authorized');
    throw authorizationError;
  }
};

export default {
  generateToken,
  verifyToken,
};
