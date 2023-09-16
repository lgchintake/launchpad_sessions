import fs from "fs";
import path from "path";
import employeeCollection from "../model/employee.model.js";
const __dirname = path.resolve();

export const getEmployees = async (req, res) => {
  res.writeHead(200, { "Content-Type": "json" });
  fs.readFile(
    __dirname + "/modules/data/" + "employees.json",
    "utf8",
    function (err, data) {
      res.end(data);
    }
  );
};

export const saveEmployees = (req, res) => {
  res.end("Hello");
};

export const test = async (req, res) => {
  // const emp = new employeeCollection({
  //   empId: 2,
  //   empName: "Yash",
  //   mobile: 123456,
  //   salary: 1000000
  // })
  // await emp.save();
  const data =  await employeeCollection.find({});
  console.log(data);
  res.setHeader("Content-Type", "json");
  res.end(JSON.stringify(data));
};
