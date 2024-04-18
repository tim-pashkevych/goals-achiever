import express from 'express';

import { validateBody } from '../../decorators/index.js';
import { loginUserSchema } from '../../schemas/index.js';
import { loginUser, logoutUser } from '../../controllers/index.js';
import { auth } from '../../middlewares/index.js';

const usersRouter = express.Router();

usersRouter.post('/login', validateBody(loginUserSchema), loginUser);

usersRouter.post('/logout', auth, logoutUser);

export default usersRouter;
