const express = require("express");
const { default: mongoose } = require("mongoose");
const app = express();
const path = require("path");
const methodOverride = require("method-override");
const { Product } = require("./models/product.js");
const Farm = require("./models/farm.js");
const { checkServerIdentity } = require("tls");
const { createPublicKey } = require("crypto");
const port = 3000;

main().catch((err) => console.log(err));

async function main() {
    mongoose.connect("mongodb://localhost:27017/grocery2");
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

// FARM ROUTES
app.get("/farms", async (req, res) => {
    const farms = await Farm.find();
    res.render("./farms/index", { farms });
});

app.post("/farms", async (req, res) => {
    try {
        const { name, city, email } = req.body;

        newFarm = new Farm({
            name: name,
            city: city,
            email: email,
        });

        await newFarm.save();

        res.redirect("/farms");
    } catch (e) {
        console.log(e);
        res.redirect("/farms");
    }
});

app.patch("/farms", async (req, res) => {
    try {
        let { name, city, email } = req.body;
        const { id } = req.query;

        console.log(name, city, email);

        farm = await Farm.findOne({ _id: id });

        if (!name) {
            name = farm.name;
        }

        if (!city) {
            city = farm.city;
        }

        if (!email) {
            email = farm.email;
        }

        update = {
            name: name,
            city: city,
            email: email,
        };

        const updatedProduct = await Farm.findOneAndUpdate(
            { _id: id },
            update,
            { new: true }
        );

        console.log(updatedProduct);
        res.redirect("/farms");
    } catch (e) {
        console.log(e);
        res.redirect("/farms");
    }
});

app.get("/farms/new", async (req, res) => {
    res.render("./farms/new");
});

app.get("/farms/:id", async (req, res) => {
    const { id } = req.params;
    const farm = await Farm.findOne({ _id: id });
    res.render("./farms/show", { farm });
});

app.get("/farms/:id/edit", async (req, res) => {
    const { id } = req.params;
    const farm = await Farm.findOne({ _id: id });
    res.render("./farms/update", { farm });
});

app.get("/farms/:id/product/new", (req, res) => {
    res.render("./products/new");
});
// PRODUCT ROUTES
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

app.patch("/products", async (req, res) => {
    try {
        let { name, storePrice, onlinePrice, quantity, size } = req.body;
        const { id } = req.query;

        product = await Product.findOne({ _id: id });

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
            { _id: id },
            update,
            { new: true }
        );
        res.redirect("/products");
    } catch (e) {
        console.log(e);
        res.redirect("/products");
    }
});

// app.delete("/products", async (req, res) => {
//     const { id } = req.query;

//     console.log(id);

//     product = await Product.findOneAndDelete({ _id: id });

//     console.log(
//         `Product: ${product.name} of ID: ${product.id} has been deleted`
//     );
//     res.redirect("/products");
// });

app.delete("/", async (req, res) => {
    const { id, type } = req.query;

    console.log(id);
    console.log(type);

    if (type === "product") {
        product = await Product.findOneAndDelete({ _id: id });

        console.log(
            `Product: ${product.name} of ID: ${product.id} has been deleted`
        );
        res.redirect("/products");
    }

    if (type === "farm") {
        farm = await Farm.findOneAndDelete({ _id: id });

        console.log(`Farm: ${farm.name} of ID: ${farm.id} has been deleted`);
        res.redirect("/farms");
    }
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
