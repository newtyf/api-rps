import { Router } from "express";
import {
  createItem,
  deleteItem,
  getItem,
  getItems,
  joinItem,
  updateItem,
} from "../controllers/roomsControler";
import { limitPeople, validateObjectIds } from "../middleware";

const router = Router();

// TODO http://localhost/api/rooms GET, POST, PUT, DELETE
router.get("/", getItems);
router.get("/:id", getItem);
router.post("/", createItem);
router.put("/update/:id", updateItem);
router.patch("/join/", limitPeople, joinItem);
router.delete("/:id", deleteItem);

export { router };
