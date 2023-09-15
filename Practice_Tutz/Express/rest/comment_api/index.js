// Get /comments - list all comments -> index route
// POST /comments - Create new comments -> create route
// Get /comments/:id - Get one comment (using an ID) -> show route
// Get /comments/:id/edit - Form to edit a specific comment -> Edit route
// PATCH /comments/:id - Update one comment -> update route
// DELETE /comments/:id - Destroy one comment -> destroy route

const express = require("express");
const { v4: uuid4 } = require("uuid");
const path = require("path");
const comments = [
    {
        id: uuid4(),
        username: "Todd",
        comment: "Starfield was optimized. Get a new pc. LoL!",
    },
    {
        id: uuid4(),
        username: "Phil",
        comment: "Starfield seems like an 11/10. I mean gamepass i'm I right?",
    },
    {
        id: uuid4(),
        username: "Bobby",
        comment: "I think I might just stay as CEO.",
    },
    {
        id: uuid4(),
        username: "Andrew",
        comment:
            "Who needs Fifa when you got Hypermotion 3 and don't forget some good ol' surprise mechanics.",
    },
    {
        id: uuid4(),
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

app.get("/comments", (req, res) => {
    res.render("comments/index", { comments });
});

app.get("/comments/new", (req, res) => {
    res.render("comments/new");
});

app.get("/comments/:id", (req, res) => {
    const id = req.params.id;
    const userData = comments.find((comment) => {
        return comment.id === id;
    });

    res.render("comments/show", { userData });
});

app.get("/comments/:id/edit", (req, res) => {
    const id = req.params.id;
    console.log(id);
    res.render("comments/edit", { id });
});

app.post("/comments", (req, res) => {
    const { username, comment } = req.body;
    const id = uuid4();
    comments.push({ id, username, comment });
    // res.render("comments", { comments }); -> Duplicates data entry
    res.redirect("/comments");
});

app.put("/comments", (req, res) => {
    console.log(req.body);
});

app.listen("3000", () => {
    console.log("Listening on port 3000");
});
