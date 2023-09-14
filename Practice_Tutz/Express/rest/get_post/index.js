const express = require("express");

app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/tacos", (req, res) => {
    const { meat, qty } = req.query;
    console.log(req.query);
    res.send(`Here's your ${qty} ${meat}`);
});

app.post("/tacos", (req, res) => {
    const { meat, qty } = req.body;
    console.log(req.body);
    res.send(`Here's your ${qty} ${meat}`);
});

app.listen("3000", () => {
    console.log("Listening on port 3000");
});
