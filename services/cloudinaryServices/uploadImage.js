import { v2 as cloudinary } from 'cloudinary';
import 'dotenv/config';

const { CLOUNDINARY_CLOUD_NAME, CLOUNDINARY_API_KEY, CLOUNDINARY_API_SECRET, CLOUNDINARY_ASSETS_FOLDER } = process.env;

cloudinary.config({
  cloud_name: CLOUNDINARY_CLOUD_NAME,
  api_key: CLOUNDINARY_API_KEY,
  api_secret: CLOUNDINARY_API_SECRET,
});

export const uploadImage = async (imagePath, folder = '', publicId = '') => {
  const options = {
    public_id: publicId,
    secure: true,
    overwrite: true,
    invalidation: true,
    folder: `${CLOUNDINARY_ASSETS_FOLDER}/${folder}`,
  };

  return await cloudinary.uploader.upload(imagePath, options);
};
