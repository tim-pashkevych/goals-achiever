import Joi from 'joi';

export const boardUpdateSchema = Joi.object({
  title: Joi.string(),
  icon: Joi.string(),
  backgroundImageUrl: Joi.string(),
})
  .min(1)
  .rule({ message: 'Body must have at least one field' });
