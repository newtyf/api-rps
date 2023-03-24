import { Router } from "express";
import {
  getUsers,
  createUser,
  updateUser,
  getUser,
  deleteUser,
} from "../controllers/usersController";

const router = Router();

// TODO http://localhost/api/users GET, POST, DELETE, PUT
router.get("/", getUsers);

router.get("/:id", getUser);

router.post("/", createUser);

router.put("/", updateUser);

router.delete("/:id", deleteUser);

export { router };
