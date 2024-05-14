// Schemas representing a one to bajilions relationship
const mongoose = require("mongoose");
const { Schema } = require("mongoose");

const tweetUserSchema = new Schema({
    username: String,
    age: Number,
});

const tweetSchema = new Schema({
    text: String,
    likes: Number,
    user: { type: Schema.Types.ObjectId, ref: "TweetUser" },
});

const TweetUser = mongoose.model("TweetUser", tweetUserSchema);
const Tweet = mongoose.model("Tweet", tweetSchema);

module.exports = { TweetUser, Tweet };
