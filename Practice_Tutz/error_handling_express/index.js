const express = require("express");
const path = require("path");
const morgan = require("morgan");
const AppError = require("./AppError");

morgan("tiny");

const app = express();
const port = 3000;

// app.use(() => {
//     console.log("Use custom function called!!!!");
// });

app.use(morgan("dev"));

app.use((req, res, next) => {
    req.requestTime = Date.now();
    next();
});

app.use((req, res, next) => {
    console.log("Middleware func called!!");
    return next();
});

app.use((req, res, next) => {
    console.log("Middleware func 2 called!!");
    return next();
});

// app.use("/secret", (req, res, next) => {
//     console.log(req.query);
//     const { password } = req.query;

//     console.log(password === "chickennuggets");

//     if (password === "chickennuggets") {
//         console.log("Welcome Back Boss!!");
//         res.redirect("/secret1");
//     } else {
//         console.log("Incorrect password!");
//         res.redirect("/");
//     }
// });

const verifyPassword = (req, res, next) => {
    console.log(req.query);
    const { password } = req.query;
    if (password === "chickennuggets") {
        console.log("Welcome Back Boss!!");
        next();
    }
    // res.send("Incorrect password!");
    res.status(401);
    // throw new Error("Password is required!!");

    // Using a custom error handler
    throw new AppError("Password is required!!", 401);
};

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/views"));

app.get("/", (req, res) => {
    console.log(req.requestTime);
    res.render("index");
});

app.get("/error", (req, res) => {
    chicken.fly();
});

app.get("/secret", verifyPassword, (req, res) => {
    res.send(
        "My Secret: Sometimes I wear headphones in public so I don't have to talk to people!!"
    );
});

app.get("/admin", (req, res) => {
    throw new AppError("You are not an Admin", 403);
});

app.use((req, res, next) => {
    res.status(404).send("Error 404! Page not found!!");
});

// app.use((err, req, res, next) => {
//     console.log("*****************");
//     console.log("This is an error");
//     console.log("*****************");
// res.status(500).send("Oh boy it's a whole clusterfuck down here!!");

//Letting express handle the error by calling the next error handling middleware
//     next(err);
// });

app.use((err, req, res, next) => {
    const { status = 500, message = "Something went wrong!!" } = err;
    res.status(status).send(message);
});

app.listen(port, () => {
    console.log("Listening on port " + port);
});
