import Joi from 'joi';

export const columnAddSchema = Joi.object({
  title: Joi.string().required(),
});
