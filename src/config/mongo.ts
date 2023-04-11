import { connect } from "mongoose";

const URI = <string>process.env.MONGO_URI;

export const dbConnectMongo = async () => {
  try {
    await connect(URI);
    console.log("***** Connection established MONGO *****");
  } catch (error) {
    console.log(error);
  }
};
