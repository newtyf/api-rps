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



module.exports = { getUsers };
