import HttpError from '../../helpers/HttpError.js';
import { usersServices } from '../../services/index.js';

export const updateUserInfo = async (req, res) => {
  const { id: _id } = req.params;
  const updatedUser = await usersServices.updateUser({ _id }, req.body);

  if (!updatedUser) throw HttpError(404);

  res.json({
    result: updatedUser,
  });
};
