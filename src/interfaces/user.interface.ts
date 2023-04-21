import { ObjectId } from "mongoose";

type pick = {
  color: string;
  id: number;
  img: string;
  name: string;
};

export interface IUSER {
  name: string;
  room: ObjectId;
  pick: pick | null;
  points: number;
}
