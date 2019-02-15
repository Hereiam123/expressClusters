//Is the file executed in master mode
const express = require("express");
const app = express();
const crypto = require("crypto");
app.get("/", (req, res) => {
  crypto.pbkdf2("a", "b", 100000, 512, "sha512", () => {
    res.send("hello");
    console.log("Loaded hashing");
  });
});

app.get("/fast", (req, res) => {
  res.send("This was the quick one");
  console.log("Loaded fast");
});

app.listen(3000);
