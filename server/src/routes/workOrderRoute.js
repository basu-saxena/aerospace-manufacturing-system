import { Router } from "express";
import workOrderController from "../controllers/workOrderController.js";
import { upload } from "../configs/multer.js";
const router = Router();

router.post(
  "/",
  upload.fields([
    { name: "documents", maxCount: 10 },
    { name: "drawings", maxCount: 10 },
  ]),
  workOrderController.create,
);

router.get("/", workOrderController.getAll);
router.get("/:id", workOrderController.getById);
router.patch("/:id", workOrderController.updateStatus);
router.patch("/:id/update-department", workOrderController.updateDepartment);
router.delete("/:id", workOrderController.delete);

export default router;
