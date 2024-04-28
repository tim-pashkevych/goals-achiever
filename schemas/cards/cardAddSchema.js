import Joi from 'joi';

import { priority } from '../../constants/index.js';

export const cardAddSchema = Joi.object({
  title: Joi.string().required(),
  description: Joi.string().required(),
  priority: Joi.string()
    .valid(...priority)
    .required(),
  deadline: Joi.number().required(),
  columnId: Joi.string().required(),
  boardId: Joi.string().required(),
});
