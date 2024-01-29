import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";
async function connectToDb() {
  try {
    const mongo = await mongoose.connect(
      `${process.env.MONGODB_URI}/${DB_NAME}`
    );
    console.log(`MONGO DB IS RUNNING ON INSTANCE: ${mongo.connection.host}`);
  } catch (error) {
    console.log(`ERROR: ${error}`);
    process.exit(1);
  }
}
export default connectToDb;
