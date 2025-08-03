const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send("Hello from Elastic Beanstalk with GitHub Actions!");
});

app.listen(3000);