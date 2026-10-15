const express = require("express");

const app = express();
const PORT = 3000;

app.get("/", (req, res) => {
  res.send("Version 2: Automatic Deployment Successful!");
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});