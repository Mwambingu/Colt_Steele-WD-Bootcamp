// Get /comments - list all comments -> index route
// POST /comments - Create new comments -> create route
// Get /comments/:id - Get one comment (using an ID) -> show route
// Get /comments/:id/edit - Form to edit a specific comment -> Edit route
// PATCH /comments/:id - Update one comment -> update route
// DELETE /comments/:id - Destroy one comment -> destroy route

const express = require("express");
const { v4: uuid4 } = require("uuid");
const methodOverride = require("method-override");
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

// Replace element in an array verbose version
function replaceArrayItem(arr, targetValue, newValue) {
    const new2DArr = arr.map((arritem, arrindex) => [arritem, arrindex]);
    console.log(new2DArr);
    const matchArr = new2DArr.find((arrItem) => arrItem[0] === targetValue);
    console.log(matchArr);
    const matchArrIndex = matchArr[1];
    console.log(matchArrIndex);

    arr[matchArrIndex] = newValue;

    return arr;
}

// replace element in an array clean version
function repArrItm(arr, tVal, nVal) {
    arr[arr.map((x, i) => [x, i]).find((x) => x[0] === tVal)[1]] = nVal;
}

// replace old comment with new comment
function replaceComment(comments, commentId, newComment) {
    console.log("Hello");
    const commentIndex = comments
        .map((comment, index) => [comment, index])
        .find((comment) => comment[0].id === commentId)[1];

    comments[commentIndex].comment = newComment;
}
count = 0;
app = express();

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/views"));
app.use(express.static(path.join(__dirname, "/public")));
app.use(methodOverride("_method"));

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
    const comment = comments.find((comment) => {
        return comment.id === id;
    });
    const commentIndex = comments.findIndex((comment) => comment.id === id);
    res.render("comments/show", { comment });
});

app.get("/comments/:id/edit", (req, res) => {
    const id = req.params.id;
    const comment = comments.find((comment) => {
        return comment.id === id;
    });
    res.render("comments/edit", { comment });
});

app.post("/comments", (req, res) => {
    const { username, comment } = req.body;
    const id = uuid4();
    comments.push({ id, username, comment });
    // res.render("comments", { comments }); -> Duplicates data entry
    res.redirect("/comments");
});

app.patch("/comments/:id", (req, res) => {
    const id = req.params.id;
    const newComment = req.body.comment;
    const foundComment = comments.find((comment) => {
        return comment.id === id;
    });
    foundComment.comment = newComment;
    res.redirect("/comments");
    // replaceComment(comments, comments[0].id, "16 Times the detail");
});

app.delete("/comments/:id", (req, res) => {
    const id = req.params.id;
    const commentIndex = comments.findIndex((comment) => comment.id === id);
    const deletedComment = comments.splice(commentIndex, 1);
    console.log(deletedComment);
    res.redirect("/comments");
});

app.listen("3000", () => {
    console.log("Listening on port 3000");
});
