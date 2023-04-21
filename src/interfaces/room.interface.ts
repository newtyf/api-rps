import { ObjectId } from "mongoose";

export interface IRoom {
  users: ObjectId[];
  state: "START" | "END" | "WAIT";
  winner: string | null;
}
