import Joi from 'joi';

import { emailRegExp, themes } from '../../constants/index.js';

export const signupUserSchema = Joi.object({
  email: Joi.string().pattern(emailRegExp).required(),
  password: Joi.string().min(5).required(),
  name: Joi.string().required(),
});
