import express from "express";
import appRouter from "./modules/routes/routes";

const app = express();
app.use(express.json());

app.use("/v1", appRouter);
// app.get("/", function (req, res) {
//   res.writeHead(200, { "Content-Type": "json" });
//   res.end('{"name": "Saurabhdsfdfdsf"}');
// });

// app.get("/all-employees", function (req, res) {
//   res.writeHead(200, { "Content-Type": "json" });
//   fs.readFile(__dirname + "/" + "test-data.json", "utf8", function (err, data) {
//     res.end(data);
//   });
// });

// app.post("/add-employee", function (req, res) {
//   res.writeHead(200, { "Content-Type": "json" });
//   console.log(req.body);
//   let resData = req.body;
//   resData.empId = 1234;
//   res.end(JSON.stringify(resData));
// });
app.listen(8081);
