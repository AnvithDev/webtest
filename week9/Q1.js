var express = require("express");
var app = express();
var bodyParser = require("body-parser");
var expressValidator = require("express-validator");

var urlencodedParser = bodyParser.urlencoded({ extended: false });

app.use(express.static("public"));
app.use(expressValidator());
app.use(urlencodedParser);

app.get("/index.html", function(req, res) {
  res.sendFile(__dirname + "/" + "index.html");
});

app.post("/getData", function(req, res) {
  console.log(req.body)
  res.send(
    "<b>Name: " +
      req.body.name +
      '</b><br><p style="text-decoration: underline">Branch: ' +
      req.body.branch +
      "</p><br>"
  );
});

app.listen(5000);
