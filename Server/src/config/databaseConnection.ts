import mongoose from "mongoose";

export const connectionDatabase = () => {
  mongoose
    .connect(`${process.env.LOCAL_DATABASE_URL}`)
    .then(() => console.log("🚀 Connected to DB"))
    .catch((error) => console.log("🛬 Mongodb connection error :", error));
};