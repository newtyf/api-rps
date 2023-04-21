import { IUSER } from "../interfaces/user.interface";
import UserModel from "../models/user.model";

const createUser = async (user: IUSER) => {
  const responseInsert = await UserModel.create(user);
  return responseInsert;
};

const getAllUsers = async () => {
  const ResponseGet = await UserModel.find().populate("room");
  return ResponseGet;
};

const getOneUser = async (id: string) => {
  const responseGet = await UserModel.findById(id).populate("room");
  return responseGet;
};

const updateUser = async (id: string, data: IUSER) => {
  const responseUpdate = await UserModel.findByIdAndUpdate(id, data, {
    new: true,
  });
  return responseUpdate;
};

/**
 * Strong physical delete
 * @param id
 * @returns
 */
const strongDeleteUser = async (id: string) => {
  const responseDelete = await UserModel.findByIdAndDelete(id);
  return responseDelete;
};

export { createUser, getAllUsers, getOneUser, updateUser, strongDeleteUser };
