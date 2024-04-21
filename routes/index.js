import { Router } from 'express';
import { cardsRouter, boardsRouter, columnsRouter, usersRouter, issuesRouter, themeRouter } from './v1/index.js';

export * from './docsRouter/docsRouter.js';
export const routerV1 = Router();

routerV1.use(usersRouter);
routerV1.use(boardsRouter);
routerV1.use(columnsRouter);
routerV1.use(cardsRouter);
routerV1.use(issuesRouter);
routerV1.use(themeRouter);
