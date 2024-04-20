const express = require("express");
const { default: mongoose } = require("mongoose");
const app = express();
const path = require("path");
const methodOverride = require("method-override");
const { Product } = require("./models/product.js");
const AppError = require("./AppError.js");

const port = 3000;

main().catch((err) => {
    console.log(err);
});

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

// async utility function for handling errors
function wrapAsync(fn) {
    return function (req, res, next) {
        fn(req, res, next).catch((e) => {
            // passing the error onto next to let our error handling function handle it
            next(e);
        });
    };
}

app.get("/", (req, res) => {
    res.render("index");
});

app.get("/products", async (req, res) => {
    const products = await Product.find({});
    res.render("./products/index", { products });
});

app.post(
    "/products",
    wrapAsync(async (req, res, next) => {
        const { name, storePrice, onlinePrice, quantity, size } = req.body;

        newProduct = new Product({
            name: name,
            price: { online: onlinePrice, inStore: storePrice },
            quantity: quantity,
            size: size,
        });

        await newProduct.save();

        res.redirect("/products");
    })
);

app.patch(
    "/products",
    wrapAsync(async (req, res, next) => {
        let { name, storePrice, onlinePrice, quantity, size } = req.body;
        const { id } = req.query;

        product = await Product.findOne({ _id: id });

        if (!product) {
            throw new AppError("Product not found!", 404);
        }

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
    })
);

app.delete(
    "/products",
    wrapAsync(async (req, res) => {
        const { id } = req.query;

        product = await Product.findOneAndDelete({ _id: id });

        console.log(
            `Product: ${product.name} of ID: ${product.id} has been deleted`
        );
        res.redirect("/products");
    })
);

app.get("/products/new", async (req, res, next) => {
    res.render("./products/new");
});

// app.get("/products/:id", async (req, res, next) => {
//     const { id } = req.params;
//     console.log(id);
// const product = await Product.findOne({ _id: id });
//     try {
//         const product = await Product.findById(id);
//         res.render("./products/show", { product });
//     } catch (err) {
//         console.log(err);
//         next(new AppError("Product not found", 404));
//     } finally {
//         console.log("Arrived!!!!");
//     }
// console.log(product);
// if (!product) next(new AppError("NOT ALLOWED", 401));
// });

// Using an Async Utility to handle errors
app.get(
    "/products/:id",
    wrapAsync(async (req, res, next) => {
        const { id } = req.params;
        console.log(id);
        const product = await Product.findById(id);
        if (!product) {
            throw new AppError("Product Not Found", 404);
        }
        res.render("./products/show", { product });
        // console.log(product);
        // if (!product) next(new AppError("NOT ALLOWED", 401));
    })
);

app.get(
    "/products/:id/edit",
    wrapAsync(async (req, res, next) => {
        const { id } = req.params;
        const product = await Product.findOne({ _id: id });
        if (!product) {
            throw new AppError("Product Not Found", 404);
        }
        res.render("./products/update", { product });
    })
);

app.get("/error", (req, res) => {
    throw new AppError("NOT ALLOWED", 401);
});

app.use((err, req, res, next) => {
    const { status = 500, message = "something went wrong" } = err;
    res.status(status).send(message);
});

app.listen(port, () => {
    console.log(`Listening on ${port}`);
});
