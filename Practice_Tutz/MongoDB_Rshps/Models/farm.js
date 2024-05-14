const mongoose = require("mongoose");
const { Schema } = require("mongoose");

const productSchema = new Schema({
    name: String,
    price: Number,
    season: {
        type: String,
        enum: ["Spring", "Summer", "Fall", "Winter"],
    },
});

const Product = mongoose.model("Product", productSchema);

// Setting up schema with references to products - one to many relationship
const farmSchema = new Schema({
    name: String,
    city: String,
    products: [{ type: Schema.Types.ObjectId, ref: "Product" }],
});

const Farm = mongoose.model("Farm", farmSchema);

module.exports = { Product, Farm };
