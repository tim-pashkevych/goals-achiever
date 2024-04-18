import { User } from '../../models/User.js';
import bcrypt from 'bcrypt';

export const createUser = async data => {
  const hashPassword = await bcrypt.hash(data.password, 5);

  const newUser = await User.create({
    ...data,
    password: hashPassword,
  });

  return newUser;
};
