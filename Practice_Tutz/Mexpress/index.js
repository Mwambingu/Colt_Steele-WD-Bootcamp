const express = require("express");
const { default: mongoose } = require("mongoose");
const app = express();
const path = require("path");
const methodOverride = require("method-override");
const { Product } = require("./models/product.js");
const port = 3000;

main().catch((err) => console.log(err));

async function main() {
    mongoose.connect("mongodb://localhost:27017/grocery");
    console.log("connected to db....");
}

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use("/static", express.static(path.join(__dirname, "public")));
app.use(methodOverride("_method"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/", (req, res) => {
    res.render("index");
});

app.get("/products", async (req, res) => {
    const products = await Product.find({});
    res.render("./products/index", { products });
});

app.post("/products", async (req, res) => {
    try {
        const { name, storePrice, onlinePrice, quantity, size } = req.body;

        newProduct = new Product({
            name: name,
            price: { online: onlinePrice, inStore: storePrice },
            quantity: quantity,
            size: size,
        });

        await newProduct.save();

        res.redirect("/products");
    } catch (e) {
        console.log(e);
        res.redirect("/products");
    }
});

app.put("/products", async (req, res) => {
    try {
        let { name, storePrice, onlinePrice, quantity, size } = req.body;
        const { id } = req.params;

        product = await Product.findOne({ id: id });

        console.log(product);

        if (!name) {
            name = product.name;
        }

        if (!storePrice) {
            storePrice = product.price.inStore;
        }

        if (!onlinePrice) {
            onlinePrice = product.price.online;
        }

        if (!quantity) {
            quantity = product.quantity;
        }

        if (!size) {
            size = product.size;
        }

        update = {
            name: name,
            price: { online: onlinePrice, inStore: storePrice },
            quantity: quantity,
            size: size,
        };

        const updatedProduct = await Product.findOneAndUpdate(
            { id: id },
            update,
            { new: true }
        );
        res.redirect("/products");
    } catch (e) {
        console.log(e);
        res.redirect("/products");
    }
});

app.delete("/products", async (req, res) => {
    const { id } = req.query;

    console.log(id);

    product = await Product.findOneAndDelete({ _id: id });

    console.log(
        `Product: ${product.name} of ID: ${product.id} has been deleted`
    );
    res.redirect("/products");
});

app.get("/products/new", async (req, res) => {
    res.render("./products/new");
});

app.get("/products/:id", async (req, res) => {
    const { id } = req.params;
    const product = await Product.findOne({ _id: id });
    res.render("./products/show", { product });
});

app.get("/products/:id/edit", async (req, res) => {
    const { id } = req.params;
    const product = await Product.findOne({ _id: id });
    res.render("./products/update", { product });
});

app.listen(port, () => {
    console.log(`Listening on ${port}`);
});
