import HttpError from '../../helpers/HttpError.js';
import { usersServices } from '../../services/usersServices/index.js';

export const register = async (req, res) => {
  const { email } = req.body;
  const user = await usersServices.searchUser({ email });

  if (user) {
    throw HttpError(409, 'Email in use');
  }
  const newUser = await usersServices.createUser(req.body);

  res.status(201).json({
    email: newUser.email,
  });
};
