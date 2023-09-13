import express from "express";
import { getEmployees } from "../controller/employee.controller.js";

const employeeRouter = express();

employeeRouter.route("/all-employees").get(getEmployees);

export default employeeRouter;
