const mongoose = require("mongoose");
const { User } = require("./Models/user");
const { Product, Farm } = require("./Models/farm");

main().catch((err) => console.log(err));

async function main() {
    await mongoose.connect("mongodb://127.0.0.1:27017/relationships");

    const user = await User.findOne({});
    const product = await Product.findOne({});
    const farm = await Farm.findOne({});

    if (!user) {
        const u = await new User({
            first: "Raila",
            last: "Odinga",
        });

        u.address.push({
            street: "Karen Blixen Road",
            city: "Nairobi",
            state: "Nairobi",
            country: "Kenya",
        });

        await u.save();
        console.log("user created!!");
    } else {
        console.log("user exists");
    }

    if (!product) {
        const product = await Product.insertMany([
            { name: "Godess Melon", price: 4.99, season: "Summer" },
            { name: "Sugar Baby Watermelon", price: 4.99, season: "Summer" },
            { name: "Asparagus", price: 3.99, season: "Spring" },
        ]);
    } else {
        console.log("Product exists");
    }

    if (!farm) {
        const farm = new Farm({
            name: "Full Belly Farms",
            city: "Nairobi, Ruaka",
        });
        const melon = await Product.findOne({ name: "Godess Melon" });
        farm.products.push(melon);
        await farm.save();
    } else {
        console.log("Farm exists");
        const farm = await Farm.findOne({});
        console.log(farm.products[0]);
    }
}
