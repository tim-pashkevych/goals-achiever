import { User } from '../../models/User.js';

export const updateUserTheme = async (req, res) => {
  const { _id } = req.user;
  const { theme } = req.body;

  const user = await User.findByIdAndUpdate(_id, { theme }, { new: true });

  if (!user) {
    return res.status(404).json({ message: 'User not found' });
  }

  res.status(200).json({ message: 'Users theme has been successfully changed' });
};
