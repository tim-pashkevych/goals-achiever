import HttpError from '../helpers/HttpError.js';
import { ctrlWrapper } from '../decorators/index.js';
import { getCardById } from '../services/cardsServices/getCardById.js';

const authCard = async (req, _, next) => {
  const card = await getCardById({ owner: req.user, _id: req.params.id });

  if (!card) {
    next(HttpError(400, 'Card Id is invalid'));
  } else {
    next();
  }
};

export default ctrlWrapper(authCard);
