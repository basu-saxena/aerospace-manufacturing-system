import { ValidationError } from "../error/validationError.js";
import workOrderService from "../services/workOrderService.js";
import {httpRespons} from "../utils/httpResponse.js"

export default {
  create: (req, res) => {
    const data = req.body;

    const requiredFields = [
      "partName",
      "partNumber",
      "quantity",
      "department",
      "dueDate",
    ];

    for (const field of requiredFields) {
      if (
        data[field] === undefined ||
        data[field] === null ||
        data[field] === ""
      ) {
        throw new ValidationError(`${field} is required`);
      }
    }

    if (quantity <= 0) {
      throw new ValidationError("Quantity must be greater than 0");
    }

    const today = new Date();
    today.setHours(0, 0, 0, 0);

    const due = new Date(dueDate);

    if (due < today) {
      throw new ValidationError("Due date cannot be in the past");
    }

    await workOrderService.create(data) ;

    httpRespons(res , 201 , "Work Order created successfully");
    
  },
};
