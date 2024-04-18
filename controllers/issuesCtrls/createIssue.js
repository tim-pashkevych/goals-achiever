import 'dotenv/config';

import ctrlWrapper from '../../decorators/ctrlWrapper.js';
import { addIssue } from '../../services/issuesServises/addIssue.js';
import { mailjetServices } from '../../services/mailjetServices/index.js';

const { CUSTOMER_SUPPORT_EMAIL } = process.env;

const createIssue = async (req, res) => {
  // const { _id: owner } = req.user;
  const { email, message } = req.body;

  const result = await addIssue(req.body);

  // Send admin notification
  await mailjetServices.sendEmail({
    email: CUSTOMER_SUPPORT_EMAIL,
    subject: 'Need Help Request',
    textMessage: `Congratulation!\n\n You have received a new 'Need help' request.\n\n From: ${email}\n Message:\n ${message}`,
    htmlMessage: `<p>Congratulation!<br /><br /> You have received a new 'Need help' request.<br /><br /> <b>From:</b> ${email}<br /><b>Message:</b><br /> ${message}</p>`,
  });

  // Send customer notification
  const emailRequest = await mailjetServices.sendEmail({
    email: email,
    subject: 'Thank you for your Request',
    textMessage: `Dear, ${req.user.name}\n\n We have received your inquiry.\n Our specialist contact you asap.\n\n With regards,\nTaskPro`,
    htmlMessage: `<p>Dear, ${req.user.name}<br /><br /> We have received your inquiry.<br /> Our specialist contact you asap.<br /><br /> With regards,<br />TaskPro</p>`,
  });

  res.status(201).json(result);
};

export default {
  createIssue: ctrlWrapper(createIssue),
};
