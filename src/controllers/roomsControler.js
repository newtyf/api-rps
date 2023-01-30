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
const getRooms = async (req, res) => {
  try {
    const rooms = await client.HGETALL("ROOMS");
    res.send({ rooms });
  } catch (error) {
    handleHttpError(res, "ERROR_GET_ROOMS");
  }
};

/**
 * Obtener detaller de la base de datos
 * @param {*} req
 * @param {*} res
 */
const getRoom = async ({ params }, res) => {
  try {
    const id = params.id;
    const room = await client.HGET("ROOMS", id);
    res.send({ room: JSON.parse(room) });
  } catch (error) {
    handleHttpError(res, "ERROR_GET_ROOMS");
  }
};

/**
 * crear room en la base de datos
 * @param {*} req
 * @param {*} res
 */
const createRoom = async (req, res) => {
  try {
    const id = uniqid();
    const newRoom = {
      createTime: new Date().getTime(),
      integrantes: [],
    };
    await client.HSET("ROOMS", id, JSON.stringify(newRoom));
    res.send({ id, room: newRoom });
  } catch (error) {
    handleHttpError(res, "ERROR_CREATE_ROOMS");
  }
};

/**
 * update room en la base de datos
 * @param {*} req
 * @param {*} res
 */
const updateRoom = async ({ params, body }, res) => {
  try {
    const id = params.id;
    const { userId } = body;
    const room = JSON.parse(await client.HGET("ROOMS", id));
    if (room.integrantes.length > 1) {
      return res.send({available: false, room: "La sala esta llena"})
    }
    room.integrantes.push(userId);
    await client.HSET("ROOMS", id, JSON.stringify(room));

    res.send({ available: true, room });
  } catch (error) {
    console.log(error);
    handleHttpError(res, "ERROR_UPDATE_ROOM");
  }
};

module.exports = { getRooms, getRoom, createRoom, updateRoom };
