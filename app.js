const express = require("express");

const app = express();

app.get("/", function (request, response) {
  response.send("Hello world");
});

module.exports = app;