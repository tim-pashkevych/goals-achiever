import { Issue } from '../../models/Issue.js';

export async function addIssue(data) {
  const newIssue = await Issue.create(data);

  return newIssue;
}
