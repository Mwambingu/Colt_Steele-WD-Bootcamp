const mongoose = require("mongoose");

main().catch((err) => console.log(err));

async function main() {
    await mongoose.connect("mongodb://127.0.0.1:27017/shopApp");
}

const productsSchema = new mongoose.Schema({
    name: { type: String, required: true },
    price: {
        online: { type: Number, required: true, default: 0, min: 0 },
        inStore: { type: Number, required: true, default: 0, min: 0 },
    },
    quantity: { type: Number, required: true },
    isOnSale: { type: Boolean, required: true, default: false },
    categories: [String],
});

const Product = mongoose.model("Product", productsSchema);

const lotion = new Product({
    name: "Nice & Lovely - Suppleness",
    quantity: 40,
    isOnSale: false,
});

lotion.save();
