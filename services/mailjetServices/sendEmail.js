import Mailjet from 'node-mailjet';
import 'dotenv/config';

const { MJ_APIKEY_PUBLIC, MJ_APIKEY_PRIVATE } = process.env;
const { MJ_SENDER_ADDRESS, MJ_SENDER_NAME } = process.env;

const mailjet = Mailjet.apiConnect(MJ_APIKEY_PUBLIC, MJ_APIKEY_PRIVATE);

export const sendEmail = async message => {
  const { email, name = '', subject, textMessage = '', htmlMessage = '' } = message;

  return await mailjet.post('send', { version: 'v3.1' }).request({
    Messages: [
      {
        From: {
          Email: MJ_SENDER_ADDRESS,
          Name: MJ_SENDER_NAME,
        },
        To: [
          {
            Email: email,
            Name: name,
          },
        ],
        Subject: subject,
        TextPart: textMessage,
        HTMLPart: htmlMessage,
      },
    ],
  });
};
