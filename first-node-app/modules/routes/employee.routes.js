import express from "express";
import {
  getEmployees,
  saveEmployees,
  test,
} from "../controller/employee.controller.js";

const employeeRouter = express();

employeeRouter.route("/").get(getEmployees);
employeeRouter.route("/").post(saveEmployees);
employeeRouter.route("/test").get(test);

export default employeeRouter;
