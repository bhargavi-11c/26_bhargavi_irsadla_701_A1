const express = require("express");
const path = require("path");

const app = express();
const PORT = 3000;

// Serve static files from "public" folder
app.use(express.static(path.join(__dirname, "public")));

// Route for /gethello
app.get("/gethello", (req, res) => {
  res.send("Hello NodeJS!!");
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
