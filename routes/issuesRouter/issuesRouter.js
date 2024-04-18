import express from 'express';

import validateBody from '../../decorators/validateBody.js';
import { createIssuesSchema } from '../../schemas/issues/index.js';
import createIssue from '../../controllers/issuesCtrls/createIssue.js';

export const issuesRouter = express.Router();

issuesRouter.post('/', validateBody(createIssuesSchema), createIssue.createIssue);
