import Joi from 'joi';

import { themes } from '../../constants/index.js';

export const signupUserSchema = Joi.object({
  email: Joi.string().email().required(),
  password: Joi.string().min(5).required(),
  name: Joi.string().required(),
  theme: Joi.string()
    .valid(...themes)
    .required(),
});
