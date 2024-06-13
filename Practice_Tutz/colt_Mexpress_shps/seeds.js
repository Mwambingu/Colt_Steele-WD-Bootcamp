const mongoose = require("mongoose");

const { Product } = require("./models/product");
const Farm = require("./models/farm");

main().catch((err) => console.log(err));

async function main() {
    mongoose.connect("mongodb://localhost:27017/grocery2");
    console.log("db connected...loading data.");

    const produce = [
        {
            name: "Sukuma Wiki",
            "price.online": 15,
            "price.inStore": 10,
            quantity: 300,
            categories: ["vegetable", "healthy", "green", "fresh"],
        },
        {
            name: "Spinach",
            "price.online": 20,
            "price.inStore": 15,
            quantity: 300,
            categories: ["vegetable", "healthy", "green", "fresh"],
        },
        {
            name: "Cabbage",
            "price.online": 70,
            "price.inStore": 65,
            quantity: 300,
            size: "1Kg",
            categories: ["vegetable", "healthy", "green", "fresh"],
        },
        {
            name: "Mung beans",
            "price.online": 80,
            "price.inStore": 75,
            quantity: 300,
            size: "1Kg",
            categories: ["vegetable", "healthy", "green", "fresh"],
        },
        {
            name: "Kidney beans",
            "price.online": 110,
            "price.inStore": 105,
            quantity: 300,
            size: "1Kg",
            categories: ["vegetable", "healthy", "green", "fresh"],
        },
    ];

    const farms = [
        {
            name: "Maindi Mingi",
            city: "Kitui",
            email: "maindimingi@maindi.com",
        },
        {
            name: "Omena Tamu",
            city: "Kisumu",
            email: "omenatamu@flavorful.com",
        },
        {
            name: "Pocho Pocho",
            city: "Mombasa",
            email: "mapochopocho@upocho.com",
        },
        {
            name: "Pocho Pocho",
            city: "Mombasa",
            email: "mapochopocho@upocho.com",
        },
        {
            name: "Maziwa Bilamaji",
            city: "Nyeri",
            email: "maziwa@bilamaji.com",
        },
    ];

    await Product.insertMany(produce);
    await Farm.insertMany(farms);

    mongoose.disconnect();
}
