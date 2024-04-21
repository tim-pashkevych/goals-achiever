import express from 'express';

import { validateBody } from '../../../decorators/index.js';
import { loginUser, logoutUser, usersControllers } from '../../../controllers/index.js';
import { auth, upload } from '../../../middlewares/index.js';

import { signupUserSchema, updateUserInfoSchema, signinUserSchema, updateUserThemeSchema } from '../../../schemas/users/index.js';

export const usersRouter = express.Router();

usersRouter.post('/users/register', validateBody(signupUserSchema), usersControllers.register);
usersRouter.post('/users/login', validateBody(signinUserSchema), loginUser);
usersRouter.post('/users/logout', auth, logoutUser);
usersRouter.patch('/users', auth, upload.single('avatar'), validateBody(updateUserInfoSchema), usersControllers.updateUserInfo);
usersRouter.patch('/users/theme', auth, validateBody(updateUserThemeSchema), usersControllers.updateUserTheme);
