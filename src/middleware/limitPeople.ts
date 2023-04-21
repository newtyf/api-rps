import { NextFunction, Request, Response } from "express";
import { IRoom } from "../interfaces/room.interface";

export const limitPeople = async (
  { body }: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const room: IRoom = body;

    if (room.users.length <= 2) {
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
