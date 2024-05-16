const { Schema } = require("mongoose");
const mongoose = require("mongoose");

const UserSchema = new Schema({
    user: String,
    age: Number,
    gender: String,
    profession: String,
});

const User = mongoose.model("User", UserSchema);

module.exports = { User };
