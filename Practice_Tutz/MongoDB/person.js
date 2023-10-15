const mongoose = require("mongoose");

main().catch((err) => {
    console.log(err);
});

async function main() {
    mongoose.connect("mongodb://127.0.0.1:27017/people");

    const { Schema } = mongoose;

    // creating a schema

    const peopleSchema = new Schema({
        firstName: String,
        lastName: String,
        age: { type: Number, min: 1 },
        weightInKg: { type: Number, min: 1 },
        heightInMtrs: { type: Number, min: 0.4 },
        gender: String,
    });

    // Defining Virtuals
    peopleSchema.virtual("fullName").get(function () {
        return `${this.firstName} ${this.lastName}`;
    });

    // creating instance methods
    peopleSchema.methods.bmi = function () {
        let heightSquared = Math.pow(this.heightInMtrs, 2);
        let personBmi = this.weightInKg / heightSquared;
        console.log(personBmi);
    };

    // Mongoose Middleware
    peopleSchema.pre("save", async function () {
        console.log("Saving ....");
    });

    peopleSchema.post("save", async function () {
        console.log("Saved!!");
    });

    // creating a model
    const Person = mongoose.model("Person", peopleSchema);

    // Creating a person and saving them to db
    const personOne = new Person({
        firstName: "Robbing",
        lastName: "Dabank",
        age: 33,
        weightInKg: 90,
        heightInMtrs: 2,
        gender: "non-binary",
    });

    personOne.save();
    personOne.bmi();
    console.log(personOne.fullName);
}
