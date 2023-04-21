import { Schema, model } from "mongoose";
import { IUSER } from "../interfaces/user.interface";

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
      ref: "Room"
    },
    pick: {
      type: {
        name: {
          type: String,
          required: true,
        },
        color: {
          type: String,
          required: true,
        },
        id: {
          type: Number,
          required: true,
        },
        img: {
          type: String,
          required: true,
        },
      },
    },
  },
  { timestamps: true, versionKey: false }
);

const UserModel = model("User", userSchema);
export default UserModel;
