import { v2 as cloudinary } from 'cloudinary';
import 'dotenv/config';

const { CLOUNDINARY_CLOUD_NAME, CLOUNDINARY_API_KEY, CLOUNDINARY_API_SECRET, CLOUNDINARY_ASSETS_FOLDER } = process.env;

cloudinary.config({
  cloud_name: CLOUNDINARY_CLOUD_NAME,
  api_key: CLOUNDINARY_API_KEY,
  api_secret: CLOUNDINARY_API_SECRET,
});

export const uploadImage = async (publicId, imagePath) => {
  const options = {
    public_id: 'avatar',
    folder: `${CLOUNDINARY_ASSETS_FOLDER}/${publicId}/`,
  };

  return await cloudinary.uploader.upload(imagePath, options);
};
