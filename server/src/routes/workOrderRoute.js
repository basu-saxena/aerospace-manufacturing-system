import { Router } from "express";
import workOrderController from "../controllers/workOrderController.js";
const router = Router();

router.post("/", workOrderController.create);
router.get("/", workOrderController.getAll);
router.get("/:id", workOrderController.getById);

export default router;
