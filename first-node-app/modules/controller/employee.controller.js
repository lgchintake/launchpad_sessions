import fs from "fs";
import path from "path";

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
