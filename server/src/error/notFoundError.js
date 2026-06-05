import { AppError } from "./appError";

export class NotFoundError extends AppError {
  constructor(name) {
    super(404, `${name} not found`);
  }
}
