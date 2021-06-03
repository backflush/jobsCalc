const express = require("express");
const app = express();
const routes = require("./routes");
const path = require("path");

// Ejs template
app.set("view engine", "ejs");

// Change the views location
app.set("views", path.join(__dirname, "views"));

// Enabling static
app.use(express.static("public"));

//  Enabling req.body
app.use(express.urlencoded({ extended: true }));

// Routes
app.use(routes);

app.listen(3000, () => console.log("Running..."));