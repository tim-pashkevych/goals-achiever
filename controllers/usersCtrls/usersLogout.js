import { usersServices } from '../../services/usersServices/index.js';

export const usersLogout = async (req, res) => {
  const { _id: id } = req.user;
  try {
    await usersServices.signOut(id);
    res.status(204).json();
  } catch (error) {
    res.status(error.status).json(error.message);
  }
};
