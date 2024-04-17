import Joi from 'joi';
import mongoose from 'mongoose';

export const createSchema = Joi.object({
  backgroundImageUrl: Joi.string(),
  icon: Joi.string(),
  title: Joi.string(),
  owner: Joi.alternatives()
    .try(
      Joi.string(),
      Joi.string().custom((value, helpers) => {
        if (!mongoose.Types.ObjectId.isValid(value)) {
          return helpers.error('any.invalid');
        }
        return value;
      }, 'MongoDB ObjectId')
    )
    .required(),
});

export const updateSchema = Joi.object({
  id: Joi.alternatives()
    .try(
      Joi.string(),
      Joi.string().custom((value, helpers) => {
        if (!mongoose.Types.ObjectId.isValid(value)) {
          return helpers.error('any.invalid');
        }
        return value;
      }, 'MongoDB ObjectId')
    )
    .required(),
  backgroundImageUrl: Joi.string(),
  icon: Joi.string(),
  title: Joi.string(),
  owner: Joi.alternatives().try(
    Joi.string(),
    Joi.string().custom((value, helpers) => {
      if (!mongoose.Types.ObjectId.isValid(value)) {
        return helpers.error('any.invalid');
      }
      return value;
    }, 'MongoDB ObjectId')
  ),
});

export const addColumnSchema = Joi.object({
  columnId: Joi.alternatives()
    .try(
      Joi.string(),
      Joi.string().custom((value, helpers) => {
        if (!mongoose.Types.ObjectId.isValid(value)) {
          return helpers.error('any.invalid');
        }
        return value;
      }, 'MongoDB ObjectId')
    )
    .required(),
  boardId: Joi.alternatives()
    .try(
      Joi.string(),
      Joi.string().custom((value, helpers) => {
        if (!mongoose.Types.ObjectId.isValid(value)) {
          return helpers.error('any.invalid');
        }
        return value;
      }, 'MongoDB ObjectId')
    )
    .required(),
});
