const express = require("express");
const { getUsers, createUser, updateUser, getUser, deleteUser } = require("../controllers/usersController");

const router = express.Router();

// TODO http://localhost/api/users GET, POST, DELETE, PUT
router.get("/", getUsers);

router.get("/:id", getUser);

router.post("/", createUser);

router.put("/", updateUser);

router.delete("/:id", deleteUser);

module.exports = router;
