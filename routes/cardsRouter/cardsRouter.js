import express from 'express';

import validateBody from '../../decorators/validateBody.js';
import { cardAddShema, cardUpdateShema } from '../../schemas/cards/index.js';
import { cardsCtrls } from '../../controllers/index.js';

export const cardsRouter = express.Router();

cardsRouter.get('/', cardsCtrls.getCards);

cardsRouter.get('/:id', cardsCtrls.getCardById);

cardsRouter.post('/', validateBody(cardAddShema), cardsCtrls.addCard);

cardsRouter.put('/:id', validateBody(cardUpdateShema), cardsCtrls.updateCard);

cardsRouter.delete('/:id', cardsCtrls.deleteCard);
