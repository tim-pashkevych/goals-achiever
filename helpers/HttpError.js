const messageList = {
  409: 'Conflict',
  200: 'OK. Successful',
  400: 'Bad request. Invalid request parameters',
  401: 'Authorization required',
  403: 'Not allowed',
  404: 'Not found',
  420: 'Rate limited',
  500: 'Internal error. Contact support',
};

const HttpError = (status, message = messageList[status]) => {
  const error = new Error(message);
  error.status = status;
  return error;
};

export default HttpError;
