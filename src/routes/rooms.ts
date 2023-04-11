import { Router } from "express";
import { limitPeople } from "../middleware/limitPeopleMiddleware";
import { createItem, deleteItem, getItem, getItems, updateItem } from "../controllers/roomsControler";

const router = Router();

// TODO http://localhost/api/rooms GET, POST, PUT, DELETE
router.get("/", getItems);
router.get("/:id", getItem);
router.post("/", createItem);
router.put("/:id", limitPeople, updateItem);
router.delete("/:id", deleteItem);

export { router };
