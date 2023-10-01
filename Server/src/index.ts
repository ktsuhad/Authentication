import express from "express";
import dotenv from "dotenv";
import cors from "cors";

import { connectionDatabase } from "./config/databaseConnection";
import { router } from "./router/authRouter";

dotenv.config();
connectionDatabase(); //db connection

const PORT = process.env.PORT || 3000; //port declaration
const app = express();
app.use(cors());

app.use("/api/v1/auth", router);

//server starting
app.listen(PORT, () =>
  console.log(
    `app listening at http://localhost:${PORT} in ${process.env.NODE_ENV} mode.`
  )
);