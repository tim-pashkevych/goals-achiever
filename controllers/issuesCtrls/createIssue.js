import ctrlWrapper from '../../decorators/ctrlWrapper.js';
import { sendAdminMessage, sendCustomerMessage, addIssue } from '../../services/index.js';

const { CUSTOMER_SUPPORT_EMAIL } = process.env;

const createIssue = async (req, res) => {
  const { _id: owner } = req.user;
  const { email, message } = req.body;

  const result = await addIssue({ ...req.body, owner });

  const adminMessage = await sendAdminMessage(CUSTOMER_SUPPORT_EMAIL, { email, message });

  const customerMessage = await sendCustomerMessage(email, req.user.name);

  res.status(201).json(result);
};

export const issuesCtrls = {
  createIssue: ctrlWrapper(createIssue),
};
