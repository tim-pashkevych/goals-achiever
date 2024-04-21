import Joi from 'joi';
import { themes } from '../../constants/index.js';
export const updateUserThemeSchema = Joi.object({
  theme: Joi.string().valid(...themes),
});
