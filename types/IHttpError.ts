import { HttpErrorStatusCode } from './HttpErrorStatusCode';

export interface IHttpError {
  status: HttpErrorStatusCode;
  message: string;
}
