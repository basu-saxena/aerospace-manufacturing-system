import { AppError } from "./appError";

export class ValidationError extends AppError {
  constructor(message = "Validation failed") {
    super(400, message);
  }
}
