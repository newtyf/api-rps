import "dotenv/config";
import express from "express";
import cors from "cors";

import { dbConnectMongo } from "./config/mongo";
import { router } from "./routes";

const app = express();
const PORT = process.env.PORT || 3002;

const whitelist = ['https://rps.newtyf.com/']

app.use(cors({
  origin: function (origin, callback) {
    if (origin === undefined) {
      return callback(new Error('origin no defnido'))
    }

    if (whitelist.indexOf(origin) !== -1) {
      callback(null, true)
    } else {
      callback(new Error('Not allowed by CORS'))
    }
  },
  optionsSuccessStatus: 200
}));
app.use(express.json());
// app.enable("trust proxy")

//* here set the routes
// todo: localhost/api
app.use("/api", router);

dbConnectMongo();
// dbConnectRedis();

app.listen(PORT, () => {
  console.log(`your app listen in http://localhost:${PORT}`);
});

