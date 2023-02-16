const express = require("express");
const app = express();

app.set("view engine", "ejs");

let userCount = 0;
app.get("/data", (req, res) => {
  res.json({ status: 200, userCount: userCount++ });
});

app.get("/*", (req, res) => {
  res.render("page");
});

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
