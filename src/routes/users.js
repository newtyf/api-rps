const express = require("express");
const { getUsers } = require("../controllers/usersController");

const router = express.Router();

// TODO http://localhost/api/users GET, POST, DELETE, PUT
router.get("/", getUsers);
router.post("/", getUsers);
router.put("/", getUsers);

module.exports = router