import Joi from 'joi';

export const signinUserSchema = Joi.object({
  email: Joi.string().email().required(),
  password: Joi.string().required(),
});
