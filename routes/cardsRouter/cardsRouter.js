import express from 'express';

import validateBody from '../../decorators/validateBody.js';
import { cardAddSchema, cardUpdateSchema } from '../../schemas/cards/index.js';
import { cardsCtrls } from '../../controllers/index.js';

export const cardsRouter = express.Router({ mergeParams: true });

cardsRouter.post('/', validateBody(cardAddSchema), cardsCtrls.addCard);

cardsRouter.patch('/:id', validateBody(cardUpdateSchema), cardsCtrls.updateCard);

cardsRouter.patch('/:id', cardsCtrls.updateCardColumn);

cardsRouter.delete('/:id', cardsCtrls.deleteCard);
