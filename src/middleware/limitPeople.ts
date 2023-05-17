import { NextFunction, Request, Response } from "express";
import { IUSER } from "../interfaces/user.interface";
import { memebersRoom } from "../services/room.service";

export const limitPeople = async (
  { body }: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const user: IUSER = body;
    const members = await memebersRoom(user.room)

    if (members.length <= 1) {
      next();
    } else {
      res.json({ available: false, room: "La sala esta llena" });
    }
  } catch (error) {
    console.log(error);
    res.status(400);
    res.json({ error, msg: "ALGO_OCURRIO" });
  }
};

