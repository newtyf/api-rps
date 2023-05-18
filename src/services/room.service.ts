import { ObjectId, Schema } from "mongoose";
import { IRoom } from "../interfaces/room.interface";
import { IUSER } from "../interfaces/user.interface";
import RoomModel from "../models/room.model";

const createRoom = async () => {
  const newRoom = {
    state: "WAIT",
    winner: null,
  };

  const responseCreate = await RoomModel.create(newRoom);
  console.log("create");
  return responseCreate;
};

const memebersRoom = async (idRoom: ObjectId) => {
  const responseRoom = await RoomModel.findById(idRoom);

  if (responseRoom) {
    return responseRoom.users;
  } else {
    return [];
  }
};

const getAllRooms = async (): Promise<IRoom[]> => {
  const responseRooms = await RoomModel.find();
  return responseRooms;
};

const getOneRoom = async (idRoom: string): Promise<IRoom | null> => {
  const responseRoom = await RoomModel.findById(idRoom);

  return responseRoom;
};

const updateRoom = async (idRoom: string, data: IRoom) => {
  const responseupdate = await RoomModel.findByIdAndUpdate(idRoom, data, {
    new: true,
  });
  return responseupdate;
};

const joinRoom = async (user: IUSER) => {
  const responseGet = await RoomModel.findById(user.room);
  if (responseGet && !responseGet?.users.includes(user._id)) {
    responseGet.users.push(user._id);
  }

  const responseupdate = await RoomModel.findByIdAndUpdate(
    user.room,
    responseGet as IRoom,
    {
      new: true,
    }
  );
  console.log(responseupdate);
  return responseupdate;
};

const exitRoom = async (user: IUSER) => {
  const responseGet = await RoomModel.findById(user.room);

  if (!responseGet) {
    return new Error("No se encontro la sala");
  }

  if (responseGet.users.includes(user._id)) {
    responseGet.users = responseGet.users.filter((item) => item.toString() !== user._id.toString());
  }

  const responseupdate = await RoomModel.findByIdAndUpdate(
    user.room,
    responseGet as IRoom,
    {
      new: true,
    }
  );
  console.log(responseupdate);
  return responseupdate;
};

const deleteRoom = async (idRoom: string) => {
  const responseDelete = await RoomModel.findByIdAndDelete(idRoom);

  return responseDelete;
};

export {
  createRoom,
  memebersRoom,
  getAllRooms,
  getOneRoom,
  updateRoom,
  joinRoom,
  exitRoom,
  deleteRoom,
};
