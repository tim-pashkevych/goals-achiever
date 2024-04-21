import { HttpErrorStatusCode } from './HttpErrorStatusCode.js';

export interface IHttpError {
  status: HttpErrorStatusCode;
  message: string;
}
