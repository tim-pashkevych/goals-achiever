import express from 'express';

import { validateBody } from '../../decorators/index.js';
import { loginUserSchema } from '../../schemas/index.js';
import { loginUser, logoutUser } from '../../controllers/index.js';
import { auth, upload } from '../../middlewares/index.js';

import { signupUserSchema } from '../../schemas/users/index.js';
import { usersControllers } from '../../controllers/usersControllers/index.js';

const usersRouter = express.Router();

usersRouter.post('/register', validateBody(signupUserSchema), usersControllers.register);

usersRouter.post('/login', validateBody(loginUserSchema), loginUser);

usersRouter.post('/logout', auth, logoutUser);

usersRouter.patch('/avatar', upload.single('avatar'), usersControllers.updateAvatar);

export default usersRouter;
