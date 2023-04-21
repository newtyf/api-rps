import { NextFunction, Request, Response } from "express";
import { IRoom } from "../interfaces/room.interface";
import { Types } from "mongoose";

export const validateObjectIds = (
  { body }: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const room: IRoom = body;

    if (room.users.every((id) => Types.ObjectId.isValid(id.toString()))) {
      next();
    } else {
      res.json({
        available: false,
        room: "uno de los ids enviado is invalido, se espera un ObjectId",
      });
    }
  } catch (error) {
    console.log(error);
    res.status(400);
    res.json({ error, msg: "ALGO_OCURRIO" });
  }
};
