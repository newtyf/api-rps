const { createClient } = require("redis");

const client = createClient({ url: process.env.REDIS_URI });
const dbConnectRedis = () => {
  client.connect().then(() => {
    console.log("***** Connection established REDIS *****");
  });
  client.on("error", (err) => console.log("Redis Client Error", err));
};

module.exports = { dbConnectRedis, client };
