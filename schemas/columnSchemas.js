import Joi from 'joi';

export const columnCreateSchema = Joi.object({
  title: Joi.string().required(),
  boardId: Joi.string().required(),
  owner: Joi.string().required(),
});

export const columnUpdateSchema = Joi.object({
  title: Joi.string().required(),
});
