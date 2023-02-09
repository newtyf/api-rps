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
 * Obtener detalle de usuario de la base de datos
 * @param {*} req
 * @param {*} res
 */
const getUser = async (req, res) => {
  try {
    const id = req.params.id
    const user = await client.HGET("USERS", id);
    res.send({ user: JSON.parse(user) });
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
    await client.HSET("USERS", userId, JSON.stringify(newUser));
    res.send({ user: newUser });
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

/**
 * borrar usuario en la base de datos
 * @param {*} req
 * @param {*} res
 */
const deleteUser = async ({ params }, res) => {
  try {
    const id = params.id
    await client.HDEL("USERS", id);
    res.send({ res: "USUARIO ELIMINADO" });
  } catch (error) {
    console.log(error)
    handleHttpError(res, "ERROR_GET_USERS");
  }
};

module.exports = { getUsers, getUser, createUser, updateUser, deleteUser };
