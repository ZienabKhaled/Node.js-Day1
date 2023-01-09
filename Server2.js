let express = require("express");
const bodyParser = require("body-parser");

const app = express();
const bodyParserForm = bodyParser.urlencoded();

app.get("/Server2", (req, res) => {
  res.sendFile(__dirname + "/Server2.html");
});

app.post("/login", bodyParserForm, (req, res) => {
  if (req.body.password.length > 8) {
    res.send("Registration success ");
  } else {
    res.send("Error password is less than 8 characters");
  }
});
app.listen(8080);
