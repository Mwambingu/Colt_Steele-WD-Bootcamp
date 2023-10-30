const express = require("express");
const path = require("path");
const mongoose = require("mongoose");
const { Product } = require("./models/product");

main().catch((err) => console.log(err));

async function main() {
    await mongoose.connect("mongodb://127.0.0.1:27017/farmStand");
    console.log("Db connected..");
}

const app = express();
const port = 3000;

app.set("views", path.join(__dirname, "views"));

app.set("view engine", "ejs");

app.get("/", (req, res) => {
    res.render("index");
});

app.listen(port, () => {
    console.log("Listening on port " + port);
});
