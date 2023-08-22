// example 1
async function hello() {
    return "Hello there";
}

hello();
hello().then((resolve) => {
    console.log(resolve);
});

async function failHello() {
    throw new Error("Oops");
}

failHello();

// Expected output
// failHello();
// Promise {<rejected>: Error: Oops
//     at failHello (<anonymous>:2:11)
//     at <anonymous>:5:1}
// VM1452:2 Uncaught (in promise) Error: Oops
//     at failHello (<anonymous>:2:11)

// example 2
const sing = async (condition) => {
    if (condition) {
        return "LALALALALA!!";
    } else {
        throw new Error("Fix your goddamn throat!");
    }
};

sing(true)
    .then((resolve) => {
        console.log(resolve);
        return sing(false);
    })
    .then((resolve) => {
        console.log(resolve);
    })
    .catch((err) => {
        console.log(err);
    });

// example 3

const delayedColorChange = (color, delay) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (color) {
                document.body.style.backgroundColor = color;
                resolve(`The background color is set to ${color}`);
            } else {
                console.log("No color was added");
                reject();
            }
        }, delay);
    });
};

async function rainbow() {
    try {
        await delayedColorChange("red", 1000);
        await delayedColorChange("orange", 1000);
        await delayedColorChange("yellow", 1000);
        await delayedColorChange("green", 1000);
        await delayedColorChange("", 1000);
        return "End of rainbow!!";
    } catch (e) {
        console.log(e);
    }
}

async function end() {
    await rainbow();
    console.log("The END");
}
