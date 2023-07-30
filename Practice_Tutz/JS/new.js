// Default Params
// Always have default params come second
function callJohn(name = "John") {
    console.log(`${name} where are you?`);
}

// Spread "..."
// Used to expand or spread an iterable or an array
const nums = [1, 2, 3];
const myRealName = ["My", "name", "is", "DocShebeleza", "!!!"];
function spreadArray(someArray) {
    console.log(...someArray);
}

console.log(Math.max(...nums));

const mixedArray = [...nums, ...myRealName];
console.log(mixedArray);
// Spread with object literals
const dog = {
    legs: 4,
    food_source: "carnivore",
    sound: "woof",
    state: "friendly",
};
const cat = {
    legs: 4,
    food_source: "carnivore",
    sound: "meow",
    state: "semi-friendly",
};

const siameseCat = {
    ...cat,
    fur: "short",
    eyes: "light blue",
    life_span: "15 years",
    state: "Super Friendly",
};

// Rest Params - The rest parameter syntax allows a function to accept an indefinite number of arguments as an array, providing a way to represent variadic functions in JavaScript

// Has an error
function sum1() {
    console.log(arguments);
    arguments.reduce((total, num) => total + num);
}
// Using rest works correctly
function sum2(...args) {
    console.log(args);
    return args.reduce((total, num) => total + num);
}

// Destructuring Arrays
// A short clean way of upacking values from  arrays
const people = ["Leona", "Angel", "Robert", "Harry", "Danny", "Julia"];
const [leona, angel, ...others] = people;

console.log(leona);

// Destructuring Objects
const user = {
    email: "user@mail.com",
    password: "userpassword",
    firstName: "John",
    lastName: "Doe",
    born: 2000,
    died: undefined,
    bio: "A certified White Hat Bank Robber who has successfuly tested all the major banks in the world. It's not safe till John says it's safe!",
    city: "New York",
    state: "New York",
};

const { email, firstName, city } = user;
console.log(email, firstName, city);
const { born: birthYear } = user;
console.log(birthYear);

// Param Destructuring
function fullName({ firstName, lastName }) {
    return `${firstName} ${lastName}`;
}
