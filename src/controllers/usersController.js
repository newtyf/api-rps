// const { tracksModel } = require("../models");
var uniqid = require("uniqid");
const { client } = require("../config/redis");
const { handleHttpError } = require("../utils/handleError");
client;

/**
 * Obtener lista de la base de datos
 * @param {*} req
 * @param {*} res
 */
const getUsers = async (req, res) => {
  try {
    const users = await client.HGETALL("USERS");
    res.send({ users });
  } catch (error) {
    handleHttpError(res, "ERROR_GET_USERS");
  }
};

/**
 * crear usuario en la base de datos
 * @param {*} req
 * @param {*} res
 */
const createUser = async ({ body }, res) => {
  try {
    const userId = uniqid();
    const { user } = body;
    const newUser = { userId, ...user };
    const users = await client.HSET("USERS", userId, JSON.stringify(newUser));
    res.send({ users, user: newUser });
  } catch (error) {
    console.log(error);
    handleHttpError(res, "ERROR_CREATE_USERS");
  }
};

/**
 * crear usuario en la base de datos
 * @param {*} req
 * @param {*} res
 */
const updateUser = async ({ body }, res) => {
  try {
    const { user } = body;
    const users = await client.HSET("USERS", user.userId, JSON.stringify(user));
    res.send({ users, user});
  } catch (error) {
    console.log(error);
    handleHttpError(res, "ERROR_CREATE_USERS");
  }
};

module.exports = { getUsers, createUser, updateUser };
