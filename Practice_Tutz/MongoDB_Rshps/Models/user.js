const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    first: { type: String, required: true },
    last: { type: String, required: true },
    // a type of one to few relationship
    address: [
        {
            _id: { _id: false },
            street: { type: String, required: true },
            city: { type: String, required: true },
            state: { type: String, required: true },
            country: { type: String, required: true },
        },
    ],
});

const User = mongoose.model("User", userSchema);
module.exports = { User };
