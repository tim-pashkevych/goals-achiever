import Joi from 'joi';

export const boardAddSchema = Joi.object({
  title: Joi.string().required(),
  icon: Joi.string().required(),
  backgroundImage: Joi.string().required(),
});
