import { v2 as cloudinary } from 'cloudinary';
import 'dotenv/config';

const { CLOUNDINARY_CLOUD_NAME, CLOUNDINARY_API_KEY, CLOUNDINARY_API_SECRET } = process.env;

cloudinary.config({
  cloud_name: CLOUNDINARY_CLOUD_NAME,
  api_key: CLOUNDINARY_API_KEY,
  api_secret: CLOUNDINARY_API_SECRET,
});

export const removeImage = async publicId => {
  return await cloudinary.uploader.destroy(publicId, { invalidate: true });
};
