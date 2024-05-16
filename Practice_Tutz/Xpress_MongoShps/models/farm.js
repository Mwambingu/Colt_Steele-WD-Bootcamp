const { Schema } = require("mongoose");
const mongoose = require("mongoose");

const farmSchema = new Schema({
    farmName: String,
    location: String,
    products: [{ type: mongoose.Types.ObjectId, ref: "Product" }],
});

const Farm = mongoose.model("Farm", farmSchema);

module.exports = { Farm };
