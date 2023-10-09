// getting-started.js
const mongoose = require("mongoose");

main().catch((err) => console.log(err));

const update = (objectToUpdate, ...updateArgs) => {
    console.log(updateArgs);
    for (updateArg of updateArgs) {
        console.log(updateArg);
    }
};

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
    const movies = await Movie.find({});

    if (movies.length === 0) {
        Movie.insertMany([
            {
                title: "Amelie",
                year: 2001,
                score: 8.3,
                rating: "R",
                date: new Date(),
            },
            {
                title: "Alien",
                year: 1979,
                score: 8.1,
                rating: "R",
                date: new Date(),
            },
            {
                title: "The Iron Giant",
                year: 1999,
                score: 7.5,
                rating: "PG",
                date: new Date(),
            },
            {
                title: "Stand By Me",
                year: 1986,
                score: 8.6,
                rating: "R",
                date: new Date(),
            },
            {
                title: "Moonrise Kingdom",
                year: 2012,
                score: 7.3,
                rating: "PG-13",
                date: new Date(),
            },
        ]);
    }

    const checkMovie = await Movie.find({ title: "Terminator Dark Fate" });
    console.log(checkMovie);
    if (!checkMovie.length) {
        const newMovie = new Movie({
            title: "Terminator Dark Fate",
            year: 2019,
            score: 6.2,
            date: new Date(),
        });

        newMovie.save();

        Movie.replaceOne(
            { title: "Terminator Dark Fate" },
            {
                title: "Terminator Dark Fate",
                year: 2019,
                score: 6.2,
                rating: "PG-13",
                date: new Date(),
            }
        );
    }

    if (checkMovie.length > 0) {
        await Movie.updateOne({ title: "Terminator Dark Fate" }, { score: 10 });
    }

    await Movie.deleteOne({ title: "Moonrise Kingdom" });
    // const movieToUpdate = await Movie.find({ year: 2019 });

    // if (movieToUpdate.length) {
    //     console.log("Updating item...");
    //     movieToUpdate[0].year = 2040;
    //     movieToUpdate[0].save();
    // } else {
    //     const terminator = new Movie({
    //         title: "Terminator Dark Fate",
    //         year: 2019,
    //         score: 6.2,
    //         date: new Date("2019-10-23"),
    //     });

    //     await terminator.save();

    //     const movieItem = await Movie.find();

    //     console.log(movieItem);
    // }
}
