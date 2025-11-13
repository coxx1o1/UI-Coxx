const fs = require("fs");
const express = require("express");
const { isUtf8 } = require("buffer");
const app = express();

app.get("/", (req, res) => {
  res.send("welcome");
});

app.get("/data", (req, res) => {
  const data = fs.readFile("test.txt", "Utf8", (err, data) => {
    if (err) {
      res.status(500).send("error in file");
      return;
    }
    res.send(data);
  });
});

app.get("*", (req, res) => {
  res.status(404).send("404 erorr found");
});

app.listen(3000, () => {
  console.log("this is were it listen {$port}");
});
