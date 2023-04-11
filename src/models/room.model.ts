import { Schema, model } from "mongoose";
import { IRoom } from "../interfaces/room.interface";

const roomSchema = new Schema<IRoom>(
  {
    integrantes: {
      type: [String],
      validate: [arrayLimit, '{PATH} exceeds the limit of 2']
    },
    state: {
      type: String,
      enum: ["START", "END", "WAIT"],
      default: "WAIT",
    },
    winner: {
      type: String,
      default: null,
    },
  },
  { timestamps: true, versionKey: false }
);

function arrayLimit(val: string[]) {
  return val.length <= 2;
}

const RoomModel = model("rooms", roomSchema);
export default RoomModel;
