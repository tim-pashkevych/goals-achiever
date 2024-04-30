import Joi from 'joi';
import { emailRegExp } from '../../constants/index.js';

export const signinUserSchema = Joi.object({
  email: Joi.string().pattern(emailRegExp).required(),
  password: Joi.string().required(),
});
