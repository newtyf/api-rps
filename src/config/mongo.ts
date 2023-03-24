import { connect } from "mongoose";

const URI = <string>process.env.MONGO_URI;

export const dbConnectMongo = async () => {
  try {
    await connect(URI);
    console.log("***CONNECTION STABLISHED***");
  } catch (error) {
    console.log(error);
  }
};
