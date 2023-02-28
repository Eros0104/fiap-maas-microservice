import express from "express";
import UsersController from "../controllers/usersController";

const router = express.Router();
const usersController = new UsersController();

router.get("/", usersController.getUsers.bind(usersController));
router.post("/", usersController.createUser.bind(usersController));
router.put("/:id", usersController.updateUser.bind(usersController));

export default router;
