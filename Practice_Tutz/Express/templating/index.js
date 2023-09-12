const express = require("express");
const fs = require("fs");
const jsonFile = require("./data.json");
const path = require("path");
const app = express();
const port = 3000;

// console.log(jsonFile);
// Pulling data from JSON file for the reddit clone app
let jsonData = JSON.parse(fs.readFileSync("./data.json"));

// const { soccer, chickens, mightyharvest } = jsonData;

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/views"));

app.get("/", (req, res) => {
    console.log("Got request!!");
    res.render("home");
});

app.get("/cats", (req, res) => {
    const cats = ["Blue", "Rocket", "Monty", "Steph", "Winston"];

    res.render("cats", { cats });
});

// Routing to the reddit clone app
app.get("/reddit/:subreddit", (req, res) => {
    const { subreddit } = req.params;
    let subPage = null;
    if (jsonData[subreddit]) {
        subPage = jsonData[subreddit];
        res.render("reddit", { subPage });
    }
    res.render("reddit", { subPage });
});

app.get("/r/:subreddit", (req, res) => {
    const { subreddit } = req.params;
    res.render("subreddit", { subreddit: subreddit });
});

app.get("/rand", (req, res) => {
    const randNum = Math.floor(Math.random() * 100 + 1);
    res.render("random", { randNum: randNum });
});

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});
