import { Issue } from '../../models/Issue.js';

export const addIssue = async body => {
  const newIssue = await Issue.create(body);

  return newIssue;
};
