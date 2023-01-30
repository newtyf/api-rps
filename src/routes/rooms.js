const express = require("express");
const {
  getRooms,
  createRoom,
  getRoom,
  updateRoom,
} = require("../controllers/roomsControler");
const router = express.Router();

// TODO http://localhost/api/rooms GET, POST, DELETE, PUT
router.get("/", getRooms);

router.get("/:id", getRoom);

router.post("/", createRoom);

router.put("/:id", updateRoom)

router.delete("/:id", (req, res) => {
  res.json({
    romms: 10,
  });
});

module.exports = router;
