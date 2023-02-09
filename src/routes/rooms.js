const express = require("express");
const {
  getRooms,
  createRoom,
  getRoom,
  joinRoom,
  exitRoom,
  deleteRoom,
} = require("../controllers/roomsControler");
const { limitPeople } = require("../middleware/limitPeopleMiddleware");
const router = express.Router();

// TODO http://localhost/api/rooms GET, POST, PUT, DELETE
router.get("/", getRooms);
router.get("/:id", getRoom);
router.post("/", createRoom);
router.put("/joinRoom/:id", limitPeople, joinRoom);
router.put("/exitRoom/:id", exitRoom);
router.delete("/:id", deleteRoom);

module.exports = router;
