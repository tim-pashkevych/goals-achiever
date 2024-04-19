import fs from 'fs/promises';

import { usersServices } from '../../services/usersServices/index.js';
import { cloudinaryServices } from '../../services/cloudinaryServices/index.js';

export const updateAvatar = async (req, res) => {
  const { _id: userId } = req.user;
  const { path } = req.file;

  const cloudinaryPublicId = await usersServices.uploadAvatar(userId, path);
  await fs.rm(path);

  const avatarURL = await cloudinaryServices.transformImage(cloudinaryPublicId, { width: 68, height: 68, crop: 'fill' });

  const user = await usersServices.updateUser({ _id: userId }, { avatarURL, cloudinaryPublicId });

  res.json({
    result: { avatarURL: user.avatarURL },
  });
};
