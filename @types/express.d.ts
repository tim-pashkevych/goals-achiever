import { IUser } from '../types/index.js';

declare global {
  namespace Express {
    export interface Request {
      user?: IUser;
    }
  }
}
