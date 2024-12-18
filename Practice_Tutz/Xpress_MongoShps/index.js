const mongoose = require("mongoose");
const express = require("express");
const methodOverride = require("method-override");
const app = express();
const path = require("path");
const morgan = require("morgan");
const { User } = require("./models/user");
const { Farm } = require("./models/farm");
const { Product } = require("./models/product");

const port = "3000";

main().catch((err) => {
    console.log(err);
});

async function main() {
    await mongoose.connect("mongodb://127.0.0.1:27017/xpressship");

    const user = await User.findOne();
    const product = await Product.findOne();
    const farm = await Farm.findOne();

    if (!user) {
        const user = new User({
            username: "Alberto",
            age: 40,
            gender: "Dragon",
            profession: "Earth Scorcher",
        });

        console.log(user);
    }

    if (!product) {
        const banana = new Product({
            productName: "Banana",
            produce: "Plant",
        });

        const beef = new Product({
            productName: "Beef",
            produce: "Animal",
        });

        const milk = new Product({
            productName: "Milk",
            produce: "Animal",
        });

        const bean = new Product({
            productName: "Beans",
            produce: "Plant",
        });

        // console.log(`${bean}"\n"${milk}"\n"${beef}"\n"${banana}"\n"`);

        await bean.save();
        await milk.save();
        await beef.save();
        await banana.save();
    }

    if (!farm) {
        const farm = new Farm({
            farmName: "Kiharas Farmland",
            location: "Runda",
        });

        // console.log(farm);

        farm.save();
    }
}

app.set("view engine", "ejs");
app.use(morgan("tiny"));
app.use("/static", express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(methodOverride("_method"));

app.get("/", async (req, res) => {
    const farms = await Farm.find();
    const products = await Product.find();
    console.log(farms[0].id);
    res.render("index", { farms, products });
});

app.post("/farm", async (req, res) => {
    const { farmName, location } = req.body;
    if (farmName && location) {
        const farm = new Farm({ farmName, location });
        await farm.save();
        res.redirect("/");
    } else {
        res.send("Missing fields!!");
    }
});

app.patch("/farm/product/:id", async (req, res) => {
    const farmId = req.params.id;
    const productIds = [];

    const farm = await Farm.findOne({ _id: farmId });
    console.log(farm);

    for (let key in req.body) {
        productIds.push(req.body[key]);
    }

    // issue with map and async mongo functions - returns pending promises instead of mongodb objects even aftaer awaiting

    // console.log(productIds);
    // const products = productIds.map(async (id) => {
    //     let product = await Product.findOne({ _id: id });
    //     console.log(product);
    //     return product;
    // });

    for (let id of productIds) {
        product = await Product.findById({ _id: id });
        farm.products.push(product);
    }

    await farm.save();

    res.redirect("/");
});

app.post("/product", async (req, res) => {
    const { productName, produce } = req.body;

    if (productName && produce) {
        const product = new product({ productName, produce });
        await product.save();
        res.redirect("/");
    } else {
        res.send("Missing fields!!");
    }
});

app.delete("/", async (req, res) => {
    const { id } = req.query;
    const deleted = await Farm.findOneAndDelete(id);
    console.log(deleted);
    res.redirect("/");
});

app.get("/farms/new", (req, res) => {
    res.render("./farms/new");
});

app.get("/farms/:id", async (req, res) => {
    const { id } = req.params;
    const farm = await Farm.findById(id).populate("products");
    console.log("Printing this....");

    let products = "";
    let productsLen = farm.products.length;

    for (product of farm.products) {
        if (productsLen > 1) {
            products += `${product.productName}, `;
            productsLen--;
        } else {
            products += product.productName;
        }
    }

    res.render("./farms/show", { farm, products });
});

app.get("/products/new", (req, res) => {
    res.render("./products/new");
});

app.get("/products/:id", async (req, res) => {
    const { id } = req.params;
    console.log("id");
    const product = await Product.findById(id);
    res.render("./products/show", { product });
});

app.listen(port, () => {
    console.log("Listening on port " + port);
});
