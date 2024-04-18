import ctrlWrapper from '../../decorators/ctrlWrapper.js';
import { addIssue } from '../../services/issuesServises/addIssue.js';

const createIssue = async (req, res) => {
  // const { _id: owner } = req.user;
  const result = await addIssue(req.body);

  res.status(201).json(result);
};

export default {
  createIssue: ctrlWrapper(createIssue),
};
