import bcrypt from 'bcrypt';

export const validatePassword = (password, hashPassword) => {
  return bcrypt.compare(password, hashPassword);
};
