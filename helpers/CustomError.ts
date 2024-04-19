import { HttpErrorStatusCode, IHttpError } from '../types/index.js';

/**
 * CustomError class provides custom Http error.
 * @extends {Error}
 * @implements {IHttpError}
 */
class CustomError extends Error implements IHttpError {
  status: HttpErrorStatusCode;

  /**
   * Creates instance of CustomError.
   * @param {HttpErrorStatusCode} status Http error status code
   * @param {string} message Error message
   * * @example
   * const myError = new CustomError("User wasn't found", 404);
   */

  constructor(status: HttpErrorStatusCode, message: string) {
    super(message);
    this.status = status;

    Object.setPrototypeOf(this, CustomError.prototype);
  }
}

export default CustomError;
