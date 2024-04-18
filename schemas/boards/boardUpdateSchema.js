import Joi from 'joi';

export const boardUpdateSchema = Joi.object({
  title: Joi.string().required(),
  icon: Joi.string().required(),
  backgroundImageUrl: Joi.string().required(),
});
