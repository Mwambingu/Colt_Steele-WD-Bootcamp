// Get /comments - list all comments -> index route
// POST /comments - Create new comments -> create route
// Get /comments/:id - Get one comment (using an ID) -> show route
// Get /comments/:id/edit - Form to edit a specific comment -> Edit route
// PATCH /comments/:id - Update one comment -> update route
// DELETE /comments/:id - Destroy one comment -> destroy route

const express = require("express");
const path = require("path");
const comments = [
    {
        username: "Todd",
        comment: "Starfield was optimized. Get a new pc. LoL!",
    },
    {
        username: "Phil",
        comment: "Starfield seems like an 11/10. I mean gamepass i'm I right?",
    },
    {
        username: "Bobby",
        comment: "I think I might just stay as CEO.",
    },
    {
        username: "Andrew",
        comment:
            "Who need Fifa when you got hypermotion and don't forget some good all surprise mechanics.",
    },
    {
        username: "Jim",
        comment:
            "You will be paying more for PS plus. Coz we got the best exclusives. Also Microsoft owns activision so we need more money.",
    },
];

app = express();

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/views"));
app.use(express.static(path.join(__dirname, "/public")));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/", (req, res) => {
    res.send("Welcome to the comments API");
});

const hello = "greetings";

app.listen("3000", () => {
    console.log("Listening on port 3000");
});
