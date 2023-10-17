const express = require("express");
const { default: mongoose } = require("mongoose");
const app = express();
const path = require("path");
const { Product } = require("./models/product.js");
const port = 3000;

main().catch((err) => console.log(err));

async function main() {
    mongoose.connect("mongodb://localhost:27017/grocery");
    console.log("connected to db....");
}

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.get("/", (req, res) => {
    res.render("index");
});

app.get("/products", async (req, res) => {
    const products = await Product.find({});
    res.send(products);
});

app.listen(port, () => {
    console.log(`Listening on ${port}`);
});
