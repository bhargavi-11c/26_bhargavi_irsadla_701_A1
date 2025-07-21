const express = require("express");
const app = express();
const port = 3000;

app.get("/", function (req, res) {
  res.send("Hello from Node Server!");
});

app.listen(port, function () {
  console.log("Server running at http://localhost:" + port);
});
