const mongoose = require("mongoose");
const { User } = require("./Models/user");
const { Product, Farm } = require("./Models/farm");
const { TweetUser, Tweet } = require("./Models/tweet");

main().catch((err) => console.log(err));

async function main() {
    await mongoose.connect("mongodb://127.0.0.1:27017/relationships");

    const user = await User.findOne({});
    const product = await Product.findOne({});
    const farm = await Farm.findOne({});
    const tweet = await Tweet.findOne({});
    const tweetUser = await TweetUser.findOne({});

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
        // Using populate to retrieve the data from the related object
        const farm = await Farm.findOne({}).populate("products");
        console.log(farm);
        console.log(farm.products[0]);
    }

    if (!tweetUser) {
        const tweetUser = new TweetUser({
            username: "Odero",
            age: 34,
        });

        const tweet = new Tweet({
            text: "I am an Idiot but still think i'm clever than you.",
            likes: 3000,
        });

        tweet.user = tweetUser;

        await tweetUser.save();
        await tweet.save();
    } else {
        console.log("Tweet User exists");

        const tweet = await Tweet.findOne({}).populate("user", "username");

        console.log(tweet);
    }
}
