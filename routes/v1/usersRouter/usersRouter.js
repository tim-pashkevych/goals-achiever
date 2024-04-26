import express from 'express';

import { validateBody } from '../../../decorators/index.js';
import { usersControllers } from '../../../controllers/index.js';
import { auth, upload } from '../../../middlewares/index.js';

import { signupUserSchema, updateUserInfoSchema, signinUserSchema, updateUserThemeSchema } from '../../../schemas/users/index.js';

export const usersRouter = express.Router();

usersRouter.post('/users/register', validateBody(signupUserSchema), usersControllers.register);
usersRouter.post('/users/login', validateBody(signinUserSchema), usersControllers.usersLogin);
usersRouter.post('/users/logout', auth, usersControllers.usersLogout);
usersRouter.get('/users', auth, usersControllers.getCurrentUser);
usersRouter.patch('/users', auth, upload.single('avatar'), validateBody(updateUserInfoSchema), usersControllers.updateUserInfo);
usersRouter.patch('/users/theme', auth, validateBody(updateUserThemeSchema), usersControllers.updateUserTheme);
usersRouter.post('/users/refresh', usersControllers.refreshToken);
