import express from "express";
import {
  getEmployees,
  saveEmployees,
} from "../controller/employee.controller.js";

const employeeRouter = express();

employeeRouter.route("/").get(getEmployees);
employeeRouter.route("/").post(saveEmployees);

export default employeeRouter;
