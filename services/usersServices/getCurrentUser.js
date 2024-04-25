import { User } from '../../models/User.js';

export const getCurrentUser = async filter => {
  return await User.findOne(filter)
    .populate({
      path: 'boards',
      select: '_id title icon backgroundImage createdAt',
    })
    .lean();
};
