const getEmployees = (req, res) => {
  res.writeHead(200, { "Content-Type": "json" });
  fs.readFile(
    __dirname + "/modules/data/" + "employees.json",
    "utf8",
    function (err, data) {
      res.end(data);
    }
  );
};

export { getEmployees };
