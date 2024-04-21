import { usersServices } from '../../services/usersServices/index.js';

export const usersLogin = async (req, res) => {
  const user = req.body;
  try {
    const loggedInUser = await usersServices.signIn(user);
    return res.status(200).json(loggedInUser);
  } catch (error) {
    if (error.status) {
      return res.status(error.status).json({ message: error.message });
    } else {
      return res.status(500).json({ message: error.message });
    }
  }
};
