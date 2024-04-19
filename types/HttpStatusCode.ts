export type HttpStatusCode =
  | 100
  | 200
  | 201
  | 202
  | 204
  | 301
  | 307
  | 400
  | 401
  | 403
  | 404
  | 500
  | 501
  | 502
  | 503
  | 504;

// Коди HTTP поділяються на п'ять груп:

// Інформаційні 100 - 199
// 100: Continue

// Успішні 200 - 299
// 200: OK
// 201: Created
// 202: Accepted
// 204: No Content

// Перенаправлення 300 - 399
// 301: Moved Permanently
// 307: Temporary Redirect

// Клієнтські помилки 400 - 499
// 400: Bad Request
// 401: Unauthorized
// 403: Forbidden
// 404: Not Found

// Серверні помилки 500 - 599
// 500: Internal Server Error
// 501: Not Implemented
// 502: Bad Gateway
// 503: Service Unavailable
// 504: Gateway Timeout
