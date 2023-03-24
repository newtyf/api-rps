import { Router } from "express";
import { limitPeople } from "../middleware/limitPeopleMiddleware";
import {
  getRooms,
  createRoom,
  getRoom,
  joinRoom,
  exitRoom,
  deleteRoom,
} from "../controllers/roomsControler";

const router = Router();

// TODO http://localhost/api/rooms GET, POST, PUT, DELETE
router.get("/", getRooms);
router.get("/:id", getRoom);
router.post("/", createRoom);
router.put("/joinRoom/:id", limitPeople, joinRoom);
router.put("/exitRoom/:id", exitRoom);
router.delete("/:id", deleteRoom);

export { router };
