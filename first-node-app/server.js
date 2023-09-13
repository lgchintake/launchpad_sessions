import express from "express";
import appRouter from "./modules/routes/routes.js";

const app = express();
app.use(express.json());

app.use("/", appRouter);
app.listen(8081);
