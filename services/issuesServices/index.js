import { sendAdminMessage, sendCustomerMessage } from './emailIssues.js';
import { addIssue } from './addIssue.js';

export const issuesServices = {
  addIssue,
  sendAdminMessage,
  sendCustomerMessage,
};
