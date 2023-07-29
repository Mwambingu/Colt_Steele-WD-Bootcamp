// Powerful Array Methods
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

// forEach
function countNumbers(numbers) {
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
function doubleNums(numbers) {
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
// this vs arrow function
// this is context sensitive
const human3 = {
    firstName: "Robertson",
    age: "31",
    gender: "male",
    vocation: "Arms Dealer",
    workStatus: "working",
    profile: () => {
        return `My name is ${this.firstName} a ${this.age} year old ${this.gender}. I am an ${this.vocation} and i'm currently ${this.workStatus}`;
    },
    profile2: function () {
        return `My name is ${this.firstName} a ${this.age} year old ${this.gender}. I am an ${this.vocation} and i'm currently ${this.workStatus}`;
    },
    ShoutName: function () {
        setTimeout(function () {
            console.log(this.firstName);
        }, 5000);
    },
    ShoutName2: function () {
        setTimeout(() => {
            console.log(this.firstName);
        }, 5000);
    },
};

function timeCount() {
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
        console.log(count);
        if (count > 30) {
            clearInterval(const_id);
        }
    }, 1000);
}

// Filter method - returns an array of items that satisfies a a given condition
function filterMeNumbers(numbers) {
    const divisibleByThree = numbers.filter((x) => x % 3 === 0);

    console.log(divisibleByThree);
}

// every and some
// every() method is used to check whether all the elements of the array satisfy the given condition or not. The Array. some() method is used to check whether at least one of the elements of the array satisfies the given condition or not
function everySome() {
    const exams = [80, 98, 92, 78, 77, 90, 89, 84, 81, 77];

    console.log(exams.every((score) => score >= 75));

    const words = ["dog", "jello", "log", "cupcake", "bag", "wag"];
    console.log(words.some((word) => word.slice(-1) === "g"));
    console.log(words.every((word) => word.slice(-1) === "g"));
}

// reduce - Takes an array and reduces it to a single value
// reduce function takes 2 arguemnts -> accumulator and current value
// accumulator is the target to reduce to
// current value each individual element in the array
const array1 = [1, 2, 3, 4];

// 0 + 1 + 2 + 3 + 4
let initialValue = 0;
const sumWithInitial = array1.reduce((accumulator, currentValue) => {
    console.log(initialValue);
    initialValue++;
    return accumulator + currentValue;
}, 100);

console.log(sumWithInitial);

const exams = [80, 98, 92, 78, 77, 90, 89, 84, 81, 77];

console.log(
    exams.reduce(
        (minScore, score) => (minScore < score ? minScore : score),
        100
    )
);
