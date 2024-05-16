const { Schema } = require("mongoose");
const mongoose = require("mongoose");

const productSchema = new Schema({
    productName: String,
    produce: {
        type: String,
        enum: {
            values: ["Plant", "Animal"],
            message: "{VALUE} is not supported",
        },
    },
});

const Product = mongoose.model("Product", productSchema);

module.exports = { Product };
