import { Types, Document } from 'mongoose';

export interface IUser extends Document {
  _id: Types.ObjectId;
  name: string;
  email: string;
  avatarURL?: string | null;
  theme: string;
  boards: Types.ObjectId[];
  token: string | null;
}

export default IUser;
