const express = require("express");
const hbs = require("hbs");
require("dotenv").config();

const app = express();
const port = process.env.PORT;

//handlebars
app.set("view engine", "hbs");
hbs.registerPartials(__dirname + "/views/partials", (err) => {
  console.log(err);
});

app.use(express.static(__dirname + "/public"));

app.get("/", (req, res) => {
  res.render("home", { nombre: "Enrique Palomino", titulo: "Portfolio" });
});

app.get("/generic", (req, res) => {
  res.render("generic", {});
});

app.get("/elements", (req, res) => {
  res.render("elements", {});
});

app.listen(port, () => {
  console.log(`App is listen in port: http://localhost:${port}`);
});
