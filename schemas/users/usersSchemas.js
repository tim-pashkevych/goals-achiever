import Joi from 'joi';

export const loginUserSchema = Joi.object({
  password: Joi.string().required(),
  email: Joi.string().email().required(),
});

export default { loginUserSchema };
