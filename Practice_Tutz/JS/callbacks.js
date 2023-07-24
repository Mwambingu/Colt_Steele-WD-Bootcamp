// Powerful Array Methods
// forEach
function countNumbers() {
    const numbers = [
        1,
        "Two",
        3,
        4,
        "five",
        6,
        7,
        "eight",
        9,
        "ten",
        11,
        "twelve",
        "thirteen",
        14,
        15,
        16,
    ];

    let total = 0;

    const printNum = function (num) {
        if (Number(num)) {
            console.log(num);
            console.log(`The total is: ${(total += num)}`);
        }
    };
    numbers.forEach(printNum);
}

function listMovies() {
    const movies = [
        {
            title: "Nimona",
            type: "Animation/Adventure",
            rtScore: 94,
            imdbScore: 7.6,
        },
        {
            title: "Extraction 2",
            type: "Action/Thriller",
            rtScore: 79,
            imdbScore: 7.1,
        },
        {
            title: "John Wick 4",
            type: "Action/Neo-noir",
            rtScore: 94,
            imdbScore: 7.8,
        },
        {
            title: "MI7: Dead Reckoning Part 1",
            type: "Action/Adventure",
            rtScore: 96,
            imdbScore: 8.0,
        },
        {
            title: "Spiderman Across the Spiderverse",
            type: "Animation/Adventure",
            rtScore: 96,
            imdbScore: 8.9,
        },
    ];

    movies.forEach(function (el) {
        console.log(
            `Movie: ${el.title} \nGenre: ${el.type} \nRotten Tomatoes: ${el.rtScore} \nIMDB: ${el.imdbScore}`
        );
    });
    // using arrow functions
    let movieTitle = [];
    movies.forEach((el) => movieTitle.push(el.title));
    console.log(movieTitle);
}

// Map -> Creates a new array with the result of calling a callback on every element in the array
function doubleNums() {
    const numbers = [
        1,
        "Two",
        3,
        4,
        "five",
        6,
        7,
        "eight",
        9,
        "ten",
        11,
        "twelve",
        "thirteen",
        14,
        15,
        16,
    ];

    // const doubleNumArray = numbers.map(function (t) {
    //     if (Number(t)) {
    //         return t + t;
    //     }
    //     return t;
    // });
    // Using arrow functions
    const doubleNumArray = numbers.map((t) => {
        if (Number(t)) {
            return t + t;
        }
        return t;
    });

    console.log(doubleNumArray);
}

// Arrow Functions
const square = (x) => {
    return x * x;
};

// implicit returns using arrow functions
const add = (x, y) => x + y;

const human3 = {
    firstName: "Robertson",
    age: "31",
    gender: "male",
    vocation: "Arms Dealer",
    workStatus: "working",
    profile() {
        return `My name is ${this.firstName} a ${this.age} year old ${this.gender}. I am an ${this.vocation} and i'm currently ${this.workStatus}`;
    },
};

// Set Timeout
setTimeout(() => {
    console.log("I am Slow");
}, 3000);
console.log("I am Speed");

//  Set interval
count = 0;
const const_id = setInterval(() => {
    console.log("You are dumb?");
    count++;
    if (count > 30000) {
        clearInterval(const_id);
    }
}, 1);
