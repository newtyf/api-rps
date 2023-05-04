import { ObjectId } from "mongoose";

export enum Pick {
  ROCK = "ROCK",
  PAPER = "PAPER",
  SCISSORS = "SCISSORS"
}

export interface IUSER {
  _id: ObjectId;
  name: string;
  room: ObjectId;
  pick: Pick | null;
  points: number;
}
