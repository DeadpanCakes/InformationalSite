"use strict";
var express = require("express");
var http = require("http");
var fs = require("fs");
var path = require("path");
//Vanilla Node
// const server = http.createServer((req: any, res: any) => {
//   let header: { "Content-Type": string };
//   let fileName = req.url;
//   const extension = path.extname(req.url);
//   switch (extension) {
//     case ".css":
//       header = { "Content-Type": "text/css" };
//       break;
//     case "":
//       header = { "Content-Type": "text/html" };
//       fileName =
//         req.url === "/" ? "/views/index.html" : `/views${req.url}.html`;
//       break;
//     default:
//       header = { "Content-Type": "text/html" };
//       fileName = "/views/404.html";
//   }
//   const pathName = path.join(__dirname, fileName);
//   fs.readFile(pathName, (err: any, data: any) => {
//     if (err) {
//       if (err.code === "ENOENT") {
//         res.writeHead(404, "text/html");
//         fs.readFile(
//           path.join(__dirname, "views", "404.html"),
//           (err: { code: string }, data: Buffer) => {
//             if (err) {
//               res.writeHead(500);
//               res.end(`Server Error: ${err.code}`);
//             }
//             res.write(data);
//             res.end();
//           }
//         );
//       } else {
//         res.writeHead(500);
//         res.end(`Server Error: ${err.code}`);
//       }
//     } else {
//       res.writeHead(200, header);
//       res.write(data);
//       res.end();
//     }
//   });
// });
var app = express();
app.get("/about", function (req, res, next) {
    res.send("About");
});
app.get("/contact", function (req, res, next) {
    res.send("contact");
});
app.get("/", function (req, res, next) {
    res.send("Home");
});
var PORT = process.env.PORT || 3000;
// server.listen(PORT, () => {
//   console.log(`listening on port ${PORT}...`);
// });
app.listen(PORT, function () {
    console.log("listening on port ".concat(PORT));
});
