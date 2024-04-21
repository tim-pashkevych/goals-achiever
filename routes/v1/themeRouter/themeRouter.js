import express from 'express';
import { usersControllers } from '../../../controllers/usersControllers/index.js';
import auth from '../../../middlewares/auth.js';
import { updateUserThemeSchema } from '../../../schemas/theme/updateUserThemeSchema.js';
import validateBody from '../../../decorators/validateBody.js';

export const themeRouter = express.Router();

themeRouter.put('/users/theme', auth, validateBody(updateUserThemeSchema), usersControllers.updateUsersTheme);
