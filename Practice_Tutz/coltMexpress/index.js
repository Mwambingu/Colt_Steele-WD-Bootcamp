const express = require("express");
const methodOverride = require("method-override");
const path = require("path");
const mongoose = require("mongoose");
const Product = require("./models/product");

main().catch((err) => console.log(err));

async function main() {
    await mongoose.connect("mongodb://127.0.0.1:27017/farmStand");
    console.log("Db connected..");
}

const app = express();
const port = 3000;

const categories = ["fruit", "vegetable", "dairy"];

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/static", express.static("public"));
app.use(methodOverride("_method"));

app.get("/", (req, res) => {
    res.render("index");
});

app.get("/products", async (req, res) => {
    const { category } = req.query;
    if (category) {
        const products = await Product.find({ category });
        res.render("./products/index", { products, category });
    } else {
        const products = await Product.find({});
        res.render("./products/index", { products, category: "all" });
    }
});

app.get("/products/new", (req, res) => {
    res.render("./products/new", { categories });
});

app.post("/products", async (req, res) => {
    const { name, price, category } = req.body;

    newProduct = new Product({
        name,
        price,
        category,
    });

    await newProduct.save();
    res.redirect(`/products/${newProduct._id}`);
});

app.get("/products/:id", async (req, res) => {
    const { id } = req.params;
    const product = await Product.findById(id);
    res.render("./products/show", { product });
});

app.get("/products/:id/edit", async (req, res) => {
    const { id } = req.params;
    const product = await Product.findById(id);
    res.render("./products/edit", { product, categories });
});

app.get("/products?category=:");

app.put("/products/:id", async (req, res) => {
    const { id } = req.params;
    console.log(req.body);
    const updateProduct = await Product.findByIdAndUpdate(id, req.body, {
        runValidators: true,
        new: true,
    });
    console.log(updateProduct);
    res.redirect(`/products/${id}`);
});

app.delete("/products/:id", async (req, res) => {
    const { id } = req.params;

    const deletedProduct = await Product.findByIdAndDelete(id);

    console.log(
        `Deleted product: ${deletedProduct.name} of id: ${deletedProduct.id}`
    );

    res.redirect("/products");
});

app.listen(port, () => {
    console.log("Listening on port " + port);
});
