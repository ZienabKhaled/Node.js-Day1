let http = require("http");
const fs = require("fs");

console.log("Server running at http://localhost:8080/");
console.log("Press Ctrl+C to quit.");

// if (req.url == "/home") {
//   res.writeHead(200, headers);
//   fs.readFile("", function (err, data) {
//     res.write(data);
//     res.end();
//   });
// }
// else if (req.url == "/secondpage") {
//     res.writeHead(200, headers);
//     fs.readFile("", function (err, data) {
//         res.write(data);
//         res.end();
//       });
// }
// else if (req.url == "/thirdpage") {
//     res.writeHead(200, headers);
//     fs.readFile("", function (err, data) {
//         res.write(data);
//         res.end();
//       });
// }
// else {
//     res.writeHead(404, headers);
//     res.write("error page not found");
//       };

// if (req.url == "/home") {
//   respondeBack("home.html", res);
// } else if (req.url == "/secondpage") {
//   respondeBack("secondpage.html", res);
// } else if (req.url == "/thirdpage") {
//   respondeBack("thirdpage.html", res);
// } else {
//   res.writeHead(404, headers);
//   res.write("error page not found");
// }
function respondeBack(fileName, res) {
  const headers = {
    "Content-Type": "text/html",
  };
  res.writeHead(200, headers);
  fs.readFile(
    "D:/labs and so on/Backend/Task1 node.js/file/"+fileName,
    function (err, data) {
        console.log(err);
      res.write(data);
     
      res.end();
    }
  );
}

http
  .createServer(function (req, res) {
    // res.write("hello");
    if (req.url == "/home") {
      respondeBack("home.html", res);
    } else if (req.url == "/secondpage") {
      respondeBack("secondpage.html", res);
    } else if (req.url == "/third") {
      respondeBack("third.html", res);
    } else {
      res.writeHead(404);
      res.write("error page not found");
    }

    // function respondeBack(fileName, res) {
    //   const headers = {
    //     "Content-Type": "text/html",
    //   };

    //   res.writeHead(200, headers);
    //   fs.readFile(
    //     "D:/labs and so on/Backend/file" + fileName,
    //     function (err, data) {
    //       res.write(data);
    //       res.end();
    //     }
    //   );
    // }

    console.log("hi");

    // res.writeHead(200, {"Content-Type": "text/plain"});
  })
  .listen(8080);
