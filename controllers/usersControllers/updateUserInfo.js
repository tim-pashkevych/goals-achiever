import fs from 'fs/promises';
import bcrypt from 'bcrypt';

import { usersServices } from '../../services/usersServices/index.js';
import { cloudinaryServices } from '../../services/cloudinaryServices/index.js';

export const updateUserInfo = async (req, res) => {
  const { _id: userId } = req.user;
  const body = {};
  if (req.body.name) body.name = req.body.name;
  if (req.body.email) body.email = req.body.email;
  if (req.body.password) {
    const password = await bcrypt.hash(req.body.password, 5);
    body.password = password;
  }

  if (req.file) {
    const { path } = req.file;
    const cloudinaryPublicId = await usersServices.uploadAvatar(userId, path);
    await fs.rm(path);

    const avatarURL = await cloudinaryServices.transformImage(cloudinaryPublicId, { width: 68, height: 68, crop: 'fill' });
    body.avatarURL = avatarURL;
  }
  const user = await usersServices.updateUser({ _id: userId }, body);

  res.json({
    result: user,
  });
};
