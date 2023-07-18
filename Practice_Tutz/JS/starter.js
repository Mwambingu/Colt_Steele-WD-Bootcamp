// Primitive Types
// Numbers - Integers and Floats
// Strings
// Booleans - True & False
// Undefined & Null

// Variables -> let, const

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
    people.push(nums);
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
        } else {
            console.log(people[x]);
        }
    }
}
