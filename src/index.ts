import "dotenv/config"
import express from "express"
import cors from "cors";

const { dbConnectRedis } = require("./config/redis");
const app = express();
const PORT = process.env.PORT || 3002;

app.use(cors());
app.use(express.json());
// app.enable("trust proxy")

//* here set the routes
// todo: localhost/api
app.use("/api", require("./routes"));

app.listen(PORT, () => {
  console.log(`your app listen in http://localhost:${PORT}`);
});
dbConnectRedis();
