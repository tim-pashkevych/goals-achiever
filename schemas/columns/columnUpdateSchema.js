import Joi from 'joi';

export const columnUpdateSchema = Joi.object({
  title: Joi.string().required(),
});
