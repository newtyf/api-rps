import { Request, Response } from "express";
import { handleHttpError } from "../utils/handleError";
import {
  strongDeleteUser,
  getAllUsers,
  getOneUser,
  createUser,
  updateUser,
} from "../services/user.service";

/**
 * Obtener lista de la base de datos
 * @param {*} req
 * @param {*} res
 */
const getItems = async (req: Request, res: Response) => {
  try {
    const responseGet = await getAllUsers();
    res.json(responseGet);
  } catch (e) {
    handleHttpError(res, "ERROR_GET_USERS", e);
  }
};

/**
 * Obtener detalle de usuario de la base de datos
 * @param {*} req
 * @param {*} res
 */
const getItem = async ({ params }: Request, res: Response) => {
  try {
    const responseGet = await getOneUser(params.id);
    res.json(responseGet);
  } catch (e) {
    handleHttpError(res, "ERROR_GET_USERS", e);
  }
};

/**
 * crear usuario en la base de datos
 * @param {*} req
 * @param {*} res
 */
const createItem = async ({ body }: Request, res: Response) => {
  try {
    const responseInsert = await createUser(body);
    res.json({ responseInsert });
  } catch (e) {
    handleHttpError(res, "ERROR_CREATE_USERS", e);
  }
};

/**
 * crear usuario en la base de datos
 * @param {*} req
 * @param {*} res
 */
const updateItem = async ({ body, params }: Request, res: Response) => {
  try {
    const responseUpdate = await updateUser(params.id, body);
    res.json(responseUpdate);
  } catch (e) {
    handleHttpError(res, "ERROR_CREATE_USERS", e);
  }
};

/**
 * borrar usuario en la base de datos
 * @param {*} req
 * @param {*} res
 */
const deleteItem = async ({ params }: Request, res: Response) => {
  try {
    await strongDeleteUser(params.id);
    res.json({ res: "USUARIO ELIMINADO" });
  } catch (e) {
    handleHttpError(res, "ERROR_GET_USERS", e);
  }
};

export { getItems, getItem, createItem, updateItem, deleteItem };
