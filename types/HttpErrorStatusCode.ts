export type HttpErrorStatusCode =
  | 400
  | 401
  | 403
  | 404
  | 500
  | 501
  | 502
  | 503
  | 504;

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
