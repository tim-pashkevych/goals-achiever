/**
 * CustomError class provides custom Http error.
 * @extends {Error}
 */
class CustomError extends Error {
  status;

  /**
   * Creates instance of CustomError.
   * @param {number} status Http error status code
   * @param {string} message Error message
   * * @example
   * const myError = new CustomError("User wasn't found", 404);
   */

  constructor(status, message) {
    super(message);
    this.status = status;

    Object.setPrototypeOf(this, CustomError.prototype);
  }
}

export default CustomError;
