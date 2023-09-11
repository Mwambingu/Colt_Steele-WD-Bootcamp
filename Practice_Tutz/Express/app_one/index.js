// Creating an Express App
const express = require("express");
module.exports = { express };
const app = express();

// Accepting requests and giving responses using use
// Using the request and response object provided by Express
// app.use((req, res) => {
//     console.log("We got a new request");
//     res.send("<h1>Hello World</h1>");
// });

// Routing with Express
app.get("/cats", (req, res) => {
    console.log("cat request...");
    res.send("<h1>We are the Cat Imperium. Mortal bow!!</h1>");
});

app.post("/", (req, res) => {
    console.log("Sending home msg...");
    res.send("<h1>There no one here hmmmm...</h1>");
});

app.get("/dogs", (req, res) => {
    console.log("dog request...");
    res.send("<h1>We are the Dog Guardians. At your service Master!!</h1>");
});

app.get("/", (req, res) => {
    console.log("home request...");
    res.send("<h1>I'm Home at last. Anybody here?</h1>");
});

// Path Parameters
// (:) - Using variable paths
app.get("/people/:person", (req, res) => {
    const { person } = req.params;
    console.log(`Looking for person...`);
    res.send(`<h1>This is the person: ${person}</h1>`);
});

app.get("/people/:person/:house", (req, res) => {
    const { person, house } = req.params;
    console.log(`Person showing house...`);
    res.send(`<h1>I am ${person} and this is my ${house}</h1>`);
});

// Working with query strings
// req object has the query property
// property contains the key value pairs of the query string
app.get("/search", (req, res) => {
    console.log("Running a search...", req.query);
    const { q } = req.query;
    if (!q) {
        res.send(`<h1>Nothing found!! No search param!!</h1>`);
    } else {
        res.send(`<h1>Search results on: ${q}</h1>`);
    }
});

// Matching every single request
app.get("*", (req, res) => {
    console.log("weird request..");
    res.send("<h1>I think you might be lost.</h1>");
});
// Listening on ports
app.listen(3000, () => {
    console.log("Listening on port 3000");
});
