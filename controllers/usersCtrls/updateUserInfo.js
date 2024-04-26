import fs from 'fs/promises';
import bcrypt from 'bcrypt';

import { usersServices } from '../../services/usersServices/index.js';
import { cloudinaryServices } from '../../services/cloudinaryServices/index.js';
import HttpError from '../../helpers/HttpError.js';

export const updateUserInfo = async (req, res) => {
  const { _id } = req.user;
  const body = req.body;
  if (body.email) {
    const checkEmail = await usersServices.searchUser({ email: body.email });
    if (checkEmail) {
      throw HttpError(409, 'Email in use');
    }
  }

  if (body.password) {
    const password = await bcrypt.hash(req.body.password, 5);
    body.password = password;
  }

  if (req.file) {
    const { path } = req.file;
    const cloudinaryPublicId = await usersServices.uploadAvatar(_id, path);
    await fs.rm(path);

    const avatarURL = await cloudinaryServices.transformImage(cloudinaryPublicId, { width: 68, height: 68, crop: 'fill' });
    body.avatarURL = avatarURL;
  }
  const user = await usersServices.updateUserInfo({ _id }, body);

  res.json({
    result: user,
  });
};
