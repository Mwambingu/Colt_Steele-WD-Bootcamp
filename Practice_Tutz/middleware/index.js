const express = require("express");
const path = require("path");
const morgan = require("morgan");

morgan("tiny");

const app = express();
const port = 3000;

// app.use(() => {
//     console.log("Use custom function called!!!!");
// });

app.use(morgan("dev"));

app.use((req, res, next) => {
    console.log("Middleware func called!!");
    return next();
});

app.use((req, res, next) => {
    console.log("Middleware func 2 called!!");
    return next();
});

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/views"));

app.get("/", (req, res) => {
    res.render("index");
});

app.listen(port, () => {
    console.log("Listening on port " + port);
});
