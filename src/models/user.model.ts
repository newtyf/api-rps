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
    belongsRoom: {
      type: String,
      required: true,
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

const UserModel = model("users", userSchema);
export default UserModel;
