import express from 'express';

import validateBody from '../../decorators/validateBody.js';
import { issueCreateSchema } from '../../schemas/issues/index.js';
import createIssue from '../../controllers/issuesCtrls/createIssue.js';
import { auth } from '../../middlewares/index.js';

export const issuesRouter = express.Router();

issuesRouter.post('/', auth, validateBody(issueCreateSchema), createIssue.createIssue);
