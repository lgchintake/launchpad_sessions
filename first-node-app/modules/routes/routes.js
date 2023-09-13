import express from "express";
import employeeRoute from "./employee.routes.js";

const Router = express();

Router.use("/employee", employeeRoute);

export default Router;
