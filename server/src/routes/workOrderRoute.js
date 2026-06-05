import { Router } from "express";
import workOrderController from "../controllers/workOrderController.js";
const router = Router();

router.post("/", workOrderController.create);

export default router;
