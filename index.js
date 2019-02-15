//Is the file executed in master mode
const express = require("express");
const app = express();
const crypto = require("crypto");
const Worker = require("webworker-threads").Worker;

app.get("/", (req, res) => {
  const worker = new Worker(function() {
    this.onmessage = function() {
      let counter = 0;
      while (counter < 1e9) {
        counter++;
      }
      postMessage(counter);
    };
  });

  worker.onmessage = function() {};

  worker.postMessage();
});

app.get("/fast", (req, res) => {
  res.send("This was the quick one");
  console.log("Loaded fast");
});

app.listen(3000);
