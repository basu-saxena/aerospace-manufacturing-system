import { AppError } from "./appError.js";

export class NotFoundError extends AppError {
  constructor(name) {
    super(404, `${name} not found`);
  }
}
