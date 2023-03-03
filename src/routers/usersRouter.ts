import express from "express";
import { UsersController } from "../controllers";

const router = express.Router();
const usersController = new UsersController();

router.get("/", usersController.getAll.bind(usersController));
router.get("/:id", usersController.getById.bind(usersController));
router.post("/", usersController.create.bind(usersController));
router.put("/:id", usersController.update.bind(usersController));
router.delete("/:id", usersController.delete.bind(usersController));

export default router;
