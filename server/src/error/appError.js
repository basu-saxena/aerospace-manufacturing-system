export class AppError extends Error {
  status = 500;

  constructor(status = 500, message) {
    super(message);
    this.status = status;
  }
}
