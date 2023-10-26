const mongoose = require("mongoose");

const productsSchema = new mongoose.Schema({
    name: { type: String, required: true },
    price: {
        online: {
            type: Number,
            required: true,
            default: 0,
            // Custom validation error messages
            min: [
                0,
                "Heyoo since when did you see negative prices!! Ya bum!! Fogoff!!",
            ],
        },
        inStore: { type: Number, required: true, default: 0, min: 0 },
    },
    quantity: { type: Number, required: true },
    isOnSale: { type: Boolean, required: true, default: false },
    categories: { type: [String], default: ["grocery"] },
    size: {
        type: String,
        enum: ["125g", "250g", "300g", "1Kg", "2Kg"],
        default: "125g",
    },
});

const Product = mongoose.model("Product", productsSchema);

exports.Product = Product;
