import { usersServices } from '../../services/usersServices/index.js';

export const getCurrentUser = async (req, res) => {
  const { _id: userId } = req.user;

  const user = await usersServices.getCurrentUser({ _id: userId });

  res.json({
    result: { user },
  });
};
