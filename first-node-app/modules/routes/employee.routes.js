import express from "express";
import { getEmployees } from "../controller/employee.controller";

const employeeRoute = express();

employeeRoute.route("/all-employees").get(getEmployees);

export default employeeRoute;