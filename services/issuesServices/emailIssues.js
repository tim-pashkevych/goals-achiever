import { mailjetServices } from '../mailjetServices/index.js';

export const sendAdminMessage = async (email, message) => {
  let result = null;
  try {
    result = await mailjetServices.sendEmail({
      email: email,
      subject: 'Need Help Request',
      textMessage: `Congratulation!\n\n You have received a new 'Need help' request.\n\n From: ${email}\n Message:\n ${message}`,
      htmlMessage: `<p>Congratulation!<br /><br /> You have received a new 'Need help' request.<br /><br /> <b>From:</b> ${email}<br /><b>Message:</b><br /> ${message}</p>`,
    });
  } catch (error) {
    // TO DO
  }

  return result;
};

export const sendCustomerMessage = async (email, name) => {
  let result = null;
  try {
    result = await mailjetServices.sendEmail({
      email: email,
      subject: 'Thank you for your Request',
      textMessage: `Dear, ${name}\n\n We have received your inquiry.\n Our specialist contact you asap.\n\n With regards,\nTaskPro`,
      htmlMessage: `<p>Dear, ${name}<br /><br /> We have received your inquiry.<br /> Our specialist contact you asap.<br /><br /> With regards,<br />TaskPro</p>`,
    });
  } catch (error) {
    // TO DO
  }

  return result;
};
