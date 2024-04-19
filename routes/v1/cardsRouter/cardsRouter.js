import express from 'express';

import validateBody from '../../../decorators/validateBody.js';
import { cardAddSchema, cardUpdateSchema } from '../../../schemas/cards/index.js';
import { cardsCtrls } from '../../../controllers/index.js';
import { auth, authCard, authColumnAndBoard } from '../../../middlewares/index.js';

export const cardsRouter = express.Router({ mergeParams: true });

cardsRouter.post('/cards', auth, authColumnAndBoard, validateBody(cardAddSchema), cardsCtrls.addCard);
cardsRouter.patch('/cards/:id', auth, authColumnAndBoard, validateBody(cardUpdateSchema), cardsCtrls.updateCard);
cardsRouter.patch('/cards/:id/move', auth, authColumnAndBoard, cardsCtrls.moveCard);
cardsRouter.delete('/cards/:id', auth, authCard, cardsCtrls.deleteCard);
