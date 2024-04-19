import { cloudinaryServices } from '../cloudinaryServices/index.js';
import { searchUser } from './searchUser.js';

export const uploadAvatar = async (id, imagePath) => {
  const user = await searchUser({ _id: id });

  if (user.cloudinaryPublicId) {
    await cloudinaryServices.removeImage(user.cloudinaryPublicId);
  }

  const image = await cloudinaryServices.uploadImage(imagePath, `users/${id}/avatar/`);

  return image.public_id;
};
