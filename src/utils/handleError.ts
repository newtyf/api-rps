import { Response } from "express";

const handleHttpError = (
  res: Response,
  message = "Algo sucedio",
  errorRaw?: any
) => {
  console.log(errorRaw)
  res.status(500);
  res.json({ error: message });
};

export { handleHttpError };
