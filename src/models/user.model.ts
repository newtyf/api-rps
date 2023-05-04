import { Schema, model } from "mongoose";
import { IUSER, Pick } from "../interfaces/user.interface";

const userSchema = new Schema<IUSER>(
  {
    name: {
      type: String,
      required: true,
    },
    points: {
      type: Number,
      required: true,
    },
    room: {
      type: Schema.Types.ObjectId,
      ref: "Room",
    },
    pick: {
      type: String,
      enum: Pick,
    },
  },
  { timestamps: true, versionKey: false }
);

const UserModel = model("User", userSchema);
export default UserModel;
