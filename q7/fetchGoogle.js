const express = require("express");
const fetch = require("node-fetch");

const app = express();

app.get("/", async function (req, res) {
  try {
    const response = await fetch("https://www.google.com", {
      headers: {
        "User-Agent":
          "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/115.0.0.0 Safari/537.36"
      }
    });
    const html = await response.text();
    res.send(html);
  } catch (error) {
    res.send("Error: " + error.message);
  }
});

app.listen(3000, () => {
  console.log("Server started on http://localhost:3000");
});
