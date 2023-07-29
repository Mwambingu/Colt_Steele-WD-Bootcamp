// Primitive Types
// Numbers - Integers and Floats
// Strings
// Booleans - True & False
// Undefined & Null

// Variables -> let, const -> Block Scoped, var -> global scoped

//  I++ vs ++I
// I++ post increment operator -> returns current value of I before increment
// ++I pre increment operator -> returns the incremented value of I

// == vs === and != vs !==
// == or != checks for equality of value doesn't care about type
// 1 == "1" > true
// 1 != "1" > false
// === or !== strictly checks for equality of type and value
// 1 === "1" > false
// 1 !== "1" > true

// Truthyness & Falsyness
// Falsy values
// false
// 0
// "" (empty string)
// undefined
// NaN

// Logical Operators
// && and => both values have to be true
// || or => only one has to be true
// \! not => evaluates false outcomes to true and vice versa

console.log("Hello World");

function calc() {
    alert("Add 2 Numbers");
    let num1 = Number(prompt("Enter number: "));
    let num2 = Number(prompt("Enter number: "));
    // alert(String(num1) + " + " + String(num2) + " = " + (num1 + num2));
    // string template literals
    alert(`${num1} + ${num2} = ${num1 + num2}`);
}

let myName = ["Lecandra", "Madieta"];

myName.forEach(function () {
    console.log("Madieta is hombre");
});

// string methods
word = "skateboard";
let facialHair = word.slice(word.indexOf("b")).replace("o", "e");

// Random Numbers
// /1-4
Math.random() * 5;
// 1-5
Math.random() * 5 + 1;

// conditionals
let daysOfTheWeek = ["Mon", "Tue", "Wed", "Thur", "Fri"];

function checkDay(daysOfTheWeek) {
    day = daysOfTheWeek[Math.ceil(Math.random() * daysOfTheWeek.length)];
    if (day === "Mon") {
        console.log("Monday's such a boreeeee!");
    } else if (day === "Fri") {
        console.log("It's Friday. Where the heck are you?");
    } else {
        console.log("Is it Friday yet?");
    }
}

function checkPass() {
    const password = prompt("Enter new password: ");
    if (password.length >= 6) {
        alert("Long enough password!");
        if (password.indexOf(" ") === -1) {
            alert("Good job! No space");
        } else {
            alert("Password cannot contain spaces");
        }
    } else {
        alert("Password too short!");
    }
}

function arrayMontage() {
    let people = ["Matonga", "Adonga", "Badonga", "Radonga", "Lodonga"];
    let nums = [1, 2, 3, 4, 5];
    console.log(people);
    // people = people.push(nums);
    // people = people.concat(nums);
    console.log(people);
    for (x in people) {
        if (typeof people[x] === "object") {
            console.log("Found an object! Might be an array!!");
            console.log(x);
            for (y in x) {
                console.log(x[y]);
            }
            people.pop(people[x]);
            console.log("Popped that bugger object!!");
            console.log(people);
            return people;
        } else {
            console.log(people[x]);
            return people;
        }
    }
    return people;
}

// Object Literals
const person = {
    name: "Roberto",
    age: 33,
    sex: "Male",
    country: "Brazil",
    city: "Rio De Janeiro",
    greeting: function () {
        console.log("Hello my name is Roberto");
    },
    favSnack: {
        name: "Gummy Bears",
        inStock: true,
        price: 1.99,
        flavors: ["grape", "apple", "cherry"],
    },
};

// Guessing Game
function guessingGame() {
    let maxNum = Number(prompt("Welcome enter max number: "));
    while (!maxNum) {
        maxNum = Number(prompt("That is not a number! Enter again: "));
    }
    const randNum = Math.ceil(Math.random() * maxNum);
    console.log(randNum);
    let guessNum = 0;
    let tries = 0;
    let guessStr = "";

    while (guessNum !== randNum) {
        guessStr = prompt("Guess the number or Type 'q' to quit the game: ");
        if (guessStr === "q") {
            alert("Goodbye!!");
            break;
        } else {
            guessNum = Number(guessStr);
            if (!guessNum) {
                alert("That is not a number!!");
            } else if (guessNum > maxNum) {
                alert("Guess is out of bounds. Try Again!");
            } else {
                if (guessNum > randNum) {
                    if (guessNum - randNum >= 5 && guessNum - randNum <= 10) {
                        alert("Almost there!!");
                    } else if (guessNum - randNum > 10) {
                        alert("So far away!!");
                    } else {
                        alert("It's right there. Look around!!");
                    }
                }
                if (randNum > guessNum) {
                    if (randNum - guessNum >= 5 && randNum - guessNum <= 10) {
                        alert("Almost there!!");
                    } else if (randNum - guessNum > 10) {
                        alert("So far away!!");
                    } else {
                        alert("It's right there. Look around!!");
                    }
                }
                tries++;
            }
        }
    }
    if (guessStr !== "q") {
        alert(`Congratulations!! You are correct!! It took ${tries} tries`);
    }
}

// \Todo-list app
// Features -> New, List, Delete and Quit
function todoApp() {
    // let todoList = [];
    let todoList = ["Hello", "World", "My mans"];
    let newTodo = "";
    let exitTodo = false;
    while (!exitTodo) {
        choice = prompt(
            "What would you like to do? Type number or word to select an option: \n1. New - create a new todo\n2. List - list all your current todos\n3. Delete - delete a specific todo \n4. Quit - exit the application"
        ).toLowerCase();

        if (choice === "1" || choice === "new") {
            newTodo = String(prompt("Enter new todo: "));
            todoList.push(newTodo);
            alert("Todo added!!");
        } else if (choice === "2" || choice === "list") {
            console.log("Current Todos: ");
            for (let todo of todoList) {
                console.log(`${todoList.indexOf(todo) + 1}. ${todo}`);
            }
        } else if (choice === "3" || choice === "delete") {
            let deleteChoice = undefined;
            deleteChoice = String(
                prompt(
                    "Type number of todo to delete or 'all' to delete every todo: "
                )
            );
            if (deleteChoice === "all") {
                let listLength = 0;
                listLength = todoList.length;
                for (let i = 0; i < listLength; i++) {
                    todoList.pop();
                }
                alert("Deleted all todos");
            } else if (!Number(deleteChoice)) {
                alert("Incorrect choice");
            } else if (
                Number(deleteChoice) > todoList.length ||
                Number(deleteChoice) <= 0
            ) {
                alert("Todo doesn't exist");
            } else {
                todoList.splice(Number(deleteChoice) - 1, 1);
                alert("Deleted Todo!");
            }
        } else if (choice === "4" || choice === "quit") {
            alert("Bye!");
            exitTodo = true;
        } else {
            alert("Error incorrect choice!!");
        }
    }
}

const capitalize = function (uncapStr) {
    let firstLetter = uncapStr.slice(0, 1);
    let restLetters = uncapStr.slice(1, uncapStr.length);
    return firstLetter.toUpperCase() + restLetters;
};

console.log(capitalize("eggplant"));
console.log(capitalize("pamplemousse"));
console.log(capitalize("squid"));
