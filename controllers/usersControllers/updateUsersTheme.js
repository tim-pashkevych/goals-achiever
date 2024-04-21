import { User } from '../../models/User.js';

export const updateUsersTheme = async (req, res) => {
  const { _id } = req.user;
  const { theme } = req.body;

  try {
    const user = await User.findByIdAndUpdate(_id, { theme }, { new: true });
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    res.status(200).json({ message: 'The subject has been successfully changed' });
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};
