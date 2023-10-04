// getting-started.js
const mongoose = require("mongoose");

main().catch((err) => console.log(err));

async function main() {
    await mongoose.connect("mongodb://127.0.0.1:27017/movieApp");
    console.log("Connected to db...");

    const movieSchema = new mongoose.Schema({
        title: String,
        year: Number,
        score: Number,
        rating: String,
        date: Date,
    });

    const Movie = mongoose.model("Movie", movieSchema);

    const movieToUpdate = await Movie.find({ year: 2019 });

    if (movieToUpdate.length) {
        console.log("Updating item...");
        movieToUpdate[0].year = 2040;
        movieToUpdate[0].save();
    } else {
        const terminator = new Movie({
            title: "Terminator Dark Fate",
            year: 2019,
            score: 6.2,
            date: new Date("2019-10-23"),
        });

        await terminator.save();

        const movieItem = await Movie.find();

        console.log(movieItem);
    }
}
