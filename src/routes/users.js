const express = require("express");
const { getUsers, createUser, updateUser } = require("../controllers/usersController");

const router = express.Router();

// TODO http://localhost/api/users GET, POST, DELETE, PUT
router.get("/", getUsers);
router.post("/", createUser);
router.put("/", updateUser);

module.exports = router;
