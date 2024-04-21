import jwt from 'jsonwebtoken';

import HttpError from '../helpers/HttpError.js';

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
    throw HttpError(401, 'Not authorized');
  }
};

export default {
  generateToken,
  verifyToken,
};
