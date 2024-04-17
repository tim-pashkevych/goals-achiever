import Joi from 'joi';

import { priority } from '../../constants/index.js';

export const cardAddShema = Joi.object({
  title: Joi.string().required(),
  description: Joi.string().required(),
  priority: Joi.string()
    .valid(...priority)
    .required(),
  deadline: Joi.string().required(),
});
