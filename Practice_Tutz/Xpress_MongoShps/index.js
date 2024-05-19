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
        await bean.save();
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

app.post("/", async (req, res) => {
    console.log("Posted!");
    res.send("Posted");
});

app.get("/farms/new", (req, res) => {
    res.render("./farms/new");
});

app.get("/farms/:id", async (req, res) => {
    const { id } = req.params;
    const farm = await Farm.findById(id);
    res.render("./farms/show", { farm });
});

app.get("/products/new", (req, res) => {
    res.render("./products/new");
});

app.get("/products/:id", async (req, res) => {
    const { id } = req.params;
    const farm = await Farm.findById(id);
    res.render("./products/show", { farm });
});

app.listen(port, () => {
    console.log("Listening on port " + port);
});