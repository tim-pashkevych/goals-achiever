import Joi from 'joi';

import { emailRegExp } from '../../constants/index.js';

export const issueCreateSchema = Joi.object({
  email: Joi.string().pattern(emailRegExp).required(),
  message: Joi.string().required(),
});
