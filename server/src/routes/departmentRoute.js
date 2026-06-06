import { Router } from "express";
import departmentController from "../controllers/departmentController.js";
const router = Router();

router.get("/", departmentController.getAll);

export default router;
