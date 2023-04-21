import { Request, Response } from "express";
import { handleHttpError } from "../utils/handleError";
import {
  createRoom,
  deleteRoom,
  getAllRooms,
  getOneRoom,
  updateRoom,
} from "../services/room.service";

/**
 * Obtener lista de la base de datos
 * @param {*} req
 * @param {*} res
 */
const getItems = async (req: Request, res: Response) => {
  try {
    const responseGetAll = await getAllRooms();
    res.json(responseGetAll);
  } catch (error) {
    console.log(error);
    handleHttpError(res, "ERROR_GET_ROOMS");
  }
};

/**
 * Obtener detaller de la base de datos
 * @param {*} req
 * @param {*} res
 */
const getItem = async ({ params }: Request, res: Response) => {
  try {
    const idRoom = params.id;
    const responseGet = await getOneRoom(idRoom);
    res.json(responseGet);
  } catch (error) {
    console.log(error);
    handleHttpError(res, "ERROR_GET_ROOMS");
  }
};

/**
 * crear room en la base de datos
 * @param {*} req
 * @param {*} res
 */
const createItem = async (req: Request, res: Response) => {
  try {
    const responseCreate = await createRoom();
    res.json(responseCreate);
  } catch (e) {
    handleHttpError(res, "ERROR_CREATE_ROOMS", e);
  }
};

/**
 * join to a room en la base de datos
 * @param {*} req
 * @param {*} res
 */
const updateItem = async ({ params, body }: Request, res: Response) => {
  try {
    const idRoom = params.id;
    const responseUpdate = await updateRoom(idRoom, body);
    res.json(responseUpdate);
  } catch (error) {
    console.log(error);
    handleHttpError(res, "ERROR_UPDATE_ROOM");
  }
};

/**
 * delete room en la base de datos
 * @param {*} req
 * @param {*} res
 */
const deleteItem = async ({ params }: Request, res: Response) => {
  try {
    const idRoom = params.id;
    await deleteRoom(idRoom);
    res.json({
      available: true,
      room: `LA SALA ${idRoom} se ha eliminado correctamente`,
    });
  } catch (error) {
    console.log(error);
    handleHttpError(res, "ERROR_DELETE_ROOM");
  }
};

export { getItems, getItem, createItem, updateItem, deleteItem };
