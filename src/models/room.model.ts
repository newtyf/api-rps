import { ObjectId, Schema, model } from "mongoose";
import { IRoom } from "../interfaces/room.interface";

const roomSchema = new Schema<IRoom>(
  {
    users: {
      type: [Schema.Types.ObjectId],
      validate: [arrayLimit, '{PATH} exceeds the limit of 2'],
      ref: "User",
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

function arrayLimit(val: ObjectId[]) {
  return val.length <= 2;
}

const RoomModel = model("Room", roomSchema);
export default RoomModel;
