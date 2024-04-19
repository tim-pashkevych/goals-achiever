import express from 'express';

import { validateBody } from '../../../decorators/index.js';
import { loginUserSchema } from '../../../schemas/index.js';
import { loginUser, logoutUser } from '../../../controllers/index.js';
import { auth, upload } from '../../../middlewares/index.js';

import { signupUserSchema, updateUserInfoSchema } from '../../../schemas/users/index.js';
import { usersControllers } from '../../../controllers/usersControllers/index.js';

export const usersRouter = express.Router();

usersRouter.post('/users/register', validateBody(signupUserSchema), usersControllers.register);
usersRouter.post('/users/login', validateBody(loginUserSchema), loginUser);
usersRouter.post('/users/logout', auth, logoutUser);
usersRouter.patch('/users/avatar', auth, upload.single('avatar'), usersControllers.updateAvatar);
usersRouter.patch('/users/:id/info', auth, validateBody(updateUserInfoSchema), usersControllers.updateUserInfo);
