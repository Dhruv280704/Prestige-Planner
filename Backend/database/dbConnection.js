import mongoose from "mongoose";
import dotenv from "dotenv";
export const dbConnection = () => {
  mongoose
    .connect(process.env.MONGO_URI, { dbName: "MERN_STACK_EVENT_MESSAGE" })
    .then(() => {
      console.log("Connected to database!");
    })
    .catch((err) => {
      console.log("Some error occured while connecting to database:", err);
    });
};