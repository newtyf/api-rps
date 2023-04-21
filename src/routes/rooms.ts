import { Router } from "express";
import {
  createItem,
  deleteItem,
  getItem,
  getItems,
  updateItem,
} from "../controllers/roomsControler";
import { limitPeople, validateObjectIds } from "../middleware";

const router = Router();

// TODO http://localhost/api/rooms GET, POST, PUT, DELETE
router.get("/", getItems);
router.get("/:id", getItem);
router.post("/", createItem);
router.put("/:id", validateObjectIds, limitPeople, updateItem);
router.delete("/:id", deleteItem);

export { router };
