import { NextFunction, Request, Response } from "express";
import { client } from "../config/redis";

export const limitPeople = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const id = req.params.id;
    const room = JSON.parse(await client.HGET("ROOMS", id));
    if (room.integrantes.length < 2) {
      next();
    } else {
      res.send({ available: false, room: "La sala esta llena" });
    }
  } catch (error) {
    console.log(error);
    res.status(404);
    res.send({ error, msg: "ALGO_OCURRIO" });
  }
};
