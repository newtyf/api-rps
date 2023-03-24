import { Router } from "express";
import { readdirSync } from "fs";

const PATH_ROUTES = __dirname;

const router = Router();

const removeExtension = (file: string) => {
  return file.split(".").shift();
};

readdirSync(PATH_ROUTES).filter(async (fileName) => {
  const name = removeExtension(fileName);
  if (name !== "index") {
    console.log("cargando ruta " + name);
    const module = await import(`./${fileName}`);
    router.use(`/${name}`, module.router); //* http://localhost/api/${name}
  }
});

export { router };
