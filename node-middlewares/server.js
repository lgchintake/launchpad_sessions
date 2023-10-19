import express from "express";
import appRouter from "./modules/routes/routes.js";
import mongoose from "mongoose";
import cors from "cors";
import "dotenv/config";

const app = express();
app.use(express.json());
app.use(cors());
console.log(process.env);

app.use("/", appRouter);

const url = process.env.DATABASE_URL;
mongoose
  .connect(url, {
    dbName: process.env.DATABASE_NAME,
    useNewUrlParser: true,
    useUnifiedTopology: true,
    autoIndex: true,
  })
  .then(async () => {
    console.log("MongoDB successfully connected.");
  })
  .catch((err) => console.error(err));
app.listen(8081);
