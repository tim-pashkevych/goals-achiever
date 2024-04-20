import Joi from 'joi';

import { emailRegExp } from '../../constants/index.js';

export const updateUserInfoSchema = Joi.object({
  email: Joi.string().pattern(emailRegExp),
  name: Joi.string(),
  password: Joi.string(),
});
