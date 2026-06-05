import { Router } from "express";
import workOrderController from "../controllers/workOrderController.js";
const router = Router();

router.post("/", workOrderController.create);
router.get("/", workOrderController.getAll);
router.get("/:id", workOrderController.getById);
router.patch("/:id", workOrderController.updateStatus);
router.delete("/:id", workOrderController.delete);

export default router;
