import Joi, { required } from 'joi';

import { priority } from '../../constants/index.js';

export const cardUpdateShema = Joi.object({
  title: Joi.string(),
  description: Joi.string(),
  priority: Joi.string().valid(...priority),
  deadline: Joi.string(),
})
  .min(1)
  .rule({ message: 'Body must have at least one field' });
