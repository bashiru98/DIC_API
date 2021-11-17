import { CustomError } from './custom-error';

export class RedisConnectionError extends CustomError {
  statusCode = 500;
  reason = 'Error connecting to redis';

  constructor() {
    super('Error connecting to redis');

    Object.setPrototypeOf(this, RedisConnectionError.prototype);
  }

  serializeErrors() {
    return [{ message: this.reason }];
  }
}