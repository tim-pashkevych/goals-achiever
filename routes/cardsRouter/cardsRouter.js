import express from 'express';

import { cardsCtrls } from '../../controllers/index.js';

export const cardsRouter = express.Router();

cardsRouter.get('/', cardsCtrls.getCards);

cardsRouter.get('/:id');

cardsRouter.post('/', cardsCtrls.addCard);

cardsRouter.put('/:id', cardsCtrls.updateCard);

cardsRouter.delete('/:id', cardsCtrls.deleteCard);
