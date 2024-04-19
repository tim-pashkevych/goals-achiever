import { ctrlWrapper } from '../../decorators/index.js';
import { signIn, signOut } from '../../services/index.js';

const loginUser = async (req, res) => {
  const user = req.body;
  try {
    const loggedInUser = await signIn(user);
    return res.status(200).json(loggedInUser);
  } catch (error) {
    if (error.status) {
      return res.status(error.status).json({ message: error.message });
    } else {
      return res.status(500).json({ message: error.message });
    }
  }
};

const logoutUser = async (req, res) => {
  const { _id: id } = req.user;
  try {
    await signOut(id);
    res.status(204).json();
  } catch (error) {
    res.status(error.status).json(error.message);
  }
};

export default {
  loginUser: ctrlWrapper(loginUser),
  logoutUser: ctrlWrapper(logoutUser),
};
