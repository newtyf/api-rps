import { IRoom } from "../interfaces/room.interface";
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

const memebersRoom = async (idRoom: string) => {
  const responseRoom = await RoomModel.findById(idRoom);

  if (responseRoom) {
    return responseRoom.users;
  } else {
    return [];
  }
};

const getAllRooms = async (): Promise<IRoom[]> => {
  const responseRooms = await RoomModel.find().populate("users");
  return responseRooms;
};

const getOneRoom = async (idRoom: string): Promise<IRoom | null> => {
  const responseRoom = await RoomModel.findById(idRoom).populate("users");

  return responseRoom;
};

const updateRoom = async (idRoom: string, data: IRoom) => {
  const responseupdate = await RoomModel.findByIdAndUpdate(idRoom, data, {
    new: true,
  });
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
  deleteRoom,
};
