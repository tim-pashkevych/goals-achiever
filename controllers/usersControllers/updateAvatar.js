import fs from 'fs/promises';

import { cloudinaryServices } from '../../services/cloudinaryServices/index.js';
import { usersServices } from '../../services/usersServices/index.js';

export const updateAvatar = async (req, res) => {
  const { _id: userId } = req.user;
  const { path } = req.file;

  const image = await cloudinaryServices.uploadImage(userId, path);
  await fs.rm(path);

  const { secure_url: avatarURL } = image;

  const user = await usersServices.updateUser({ _id: userId }, { avatarURL });

  res.json({
    result: { avatarURL: user.avatarURL },
  });
};
