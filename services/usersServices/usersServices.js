import bcrypt from 'bcrypt';

import { User } from '../../models/User.js';

export const searchUser = filter => {
  return User.findOne(filter);
};

export const createUser = async data => {
  const hashPassword = await bcrypt.hash(data.password, 5);

  const newUser = User.create({
    ...data,
    password: hashPassword,
  });

  return newUser;
};

export const updateUser = (id, data) => {
  return User.findByIdAndUpdate(id, data, { new: true });
};

export const validatePassword = (password, hashPassword) => {
  return bcrypt.compare(password, hashPassword);
};
