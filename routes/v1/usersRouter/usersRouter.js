import express from 'express';

import { validateBody } from '../../../decorators/index.js';
import { loginUserSchema } from '../../../schemas/index.js';
import { loginUser, logoutUser, usersControllers } from '../../../controllers/index.js';
import { auth, upload } from '../../../middlewares/index.js';

import { signupUserSchema, updateUserInfoSchema } from '../../../schemas/users/index.js';

export const usersRouter = express.Router();

usersRouter.post('/users/register', validateBody(signupUserSchema), usersControllers.register);
usersRouter.post('/users/login', validateBody(loginUserSchema), loginUser);
usersRouter.post('/users/logout', auth, logoutUser);
usersRouter.patch('/users/info', auth, upload.single('avatar'), validateBody(updateUserInfoSchema), usersControllers.updateUserInfo);
