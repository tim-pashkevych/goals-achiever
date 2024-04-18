import express from 'express';

import validateBody from '../../decorators/validateBody.js';
import { cardAddSchema, cardUpdateSchema } from '../../schemas/cards/index.js';
import { cardsCtrls } from '../../controllers/index.js';
import { auth } from '../../middlewares/index.js';

export const cardsRouter = express.Router({ mergeParams: true });

cardsRouter.post('/', auth, validateBody(cardAddSchema), cardsCtrls.addCard);

cardsRouter.patch('/:id', auth, validateBody(cardUpdateSchema), cardsCtrls.updateCard);

cardsRouter.patch('/:id', auth, cardsCtrls.updateCardColumn);

cardsRouter.delete('/:id', auth, cardsCtrls.deleteCard);
