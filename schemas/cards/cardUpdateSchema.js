import Joi from 'joi';

import { priority } from '../../constants/index.js';

export const cardUpdateSchema = Joi.object({
  title: Joi.string(),
  description: Joi.string(),
  priority: Joi.string().valid(...priority),
  deadline: Joi.string(),
  columnId: Joi.string().required(),
  boardId: Joi.string().required(),
})
  .min(3)
  .rule({ message: 'Body must have at least one changed field' });
