import express from "express";
import appRouter from "./modules/routes/routes.js";
import mongoose from "mongoose";

const app = express();
app.use(express.json());

app.use("/", appRouter);

const url =
  "mongodb+srv://admin:Launchpad_123@cluster0.jfp2g81.mongodb.net/?retryWrites=true&w=majority";
mongoose
  .connect(url, {
    dbName: "launchpad",
    useNewUrlParser: true,
    useUnifiedTopology: true,
    autoIndex: true,
  })
  .then(async () => {
    console.log("MongoDB successfully connected.");
  })
  .catch((err) => console.error(err));
app.listen(8081);
