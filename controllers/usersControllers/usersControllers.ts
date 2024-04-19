import { Response, Request } from 'express';

import { ctrlWrapper } from '../../decorators/index.js';
import { signIn, signOut } from '../../services/index.js';
import { CustomError } from '../../helpers/index.js';
import { IUser } from '../../types/index.js';

const loginUser = async (req: Request, res: Response) => {
  const user = req.body;
  try {
    const loggedInUser = await signIn(user);
    return res.status(200).json(loggedInUser);
  } catch (error) {
    if (error instanceof CustomError && error.status) {
      return res.status(error.status).json({ message: error.message });
    } else if (error) {
      return res.status(500).json({ message: error instanceof Error ? error.message : 'Something went wrong during login process' });
    }
  }
};

const logoutUser = async (req: Request, res: Response) => {
  const { _id: id } = req.user as IUser;
  try {
    await signOut(id.toString());
    return res.status(204).json();
  } catch (error) {
    if (error instanceof CustomError && error.status) {
      return res.status(error.status).json({ message: error.message });
    } else if (error) {
      return res.status(500).json({ message: error instanceof Error ? error.message : 'Something went wrong during logout process' });
    }
  }
};

export default {
  loginUser: ctrlWrapper(loginUser),
  logoutUser: ctrlWrapper(logoutUser),
};
