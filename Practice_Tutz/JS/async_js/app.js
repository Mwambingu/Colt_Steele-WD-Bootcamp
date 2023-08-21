// callstack example
const multiply = (x, y) => x * y;

const square = (x) => multiply(x, x);

// a2 + b2 = c2
const isRightTriangle = (a, b, c) => {
    return square(a) + square(b) === square(c);
};

console.log(isRightTriangle(3, 4, 5));

// Javascript Callbacks -> Bypassing JS's single thread nature
console.log("Sending request to server!"); //Javascript executes
setTimeout(() => {
    // Javascript passes this to the browser which runs the task in the background
    console.log("Here is the data you requested.."); // Once the time expires browser reminds javascript of the function and javascript executes it.
}, 10000);
console.log("continue browsing....."); // Javascript continues executing

// Callback Hell
setTimeout(() => {
    document.body.style.backgroundColor = "orange";
    setTimeout(() => {
        document.body.style.backgroundColor = "red";
        setTimeout(() => {
            document.body.style.backgroundColor = "blue";
        }, 1000);
    }, 1000);
}, 1000);

const delayedColorChange = (color, delay, doNext) => {
    setTimeout(() => {
        document.body.style.backgroundColor = color;
        doNext();
    }, delay);
};

delayedColorChange("red", 4000, () => {
    delayedColorChange("orange", 1000, () => {
        delayedColorChange("yellow", 1000, () => {
            delayedColorChange("green", 1000, () => {
                console.log("Function called");
            });
        });
    });
});

// ---Hypothetical Use Case -> Callback Hell

// searchMoviesApi('Gran Turismo', () => {
//   saveToMyDB(movies, () => {
//     if it works run this
//   }, () => {
//     if it fails run this
//   })
// }, () => {
//   if it fails run this
// })
