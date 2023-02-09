var uniqid = require("uniqid");
const { client } = require("../config/redis");
const { handleHttpError } = require("../utils/handleError");

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
 * join to a room en la base de datos
 * @param {*} req
 * @param {*} res
 */
const joinRoom = async ({ params, body }, res) => {
  try {
    const id = params.id;
    const { userId } = body;
    const room = JSON.parse(await client.HGET("ROOMS", id));
    room.integrantes.push(userId);
    await client.HSET("ROOMS", id, JSON.stringify(room));

    res.send({ available: true, room });
  } catch (error) {
    console.log(error);
    handleHttpError(res, "ERROR_JOIN_ROOM");
  }
};

/**
 * exit room en la base de datos
 * @param {*} req
 * @param {*} res
 */
const exitRoom = async ({ params, body }, res) => {
  try {
    const id = params.id;
    const { userId } = body;
    const room = JSON.parse(await client.HGET("ROOMS", id));
    room.integrantes = room.integrantes.filter(item => item !== userId)
    await client.HSET("ROOMS", id, JSON.stringify(room));

    res.send({ available: true, room });
  } catch (error) {
    console.log(error);
    handleHttpError(res, "ERROR_EXIT_ROOM");
  }
};

/**
 * delete room en la base de datos
 * @param {*} req
 * @param {*} res
 */
const deleteRoom = async ({ params }, res) => {
  try {
    const id = params.id;
    await client.HDEL("ROOMS", id);
    res.send({ available: true, room: `LA SALA ${id} se ha eliminado correctamente` });
  } catch (error) {
    console.log(error);
    handleHttpError(res, "ERROR_DELETE_ROOM");
  }
};

module.exports = { getRooms, getRoom, createRoom, joinRoom, exitRoom, deleteRoom };
