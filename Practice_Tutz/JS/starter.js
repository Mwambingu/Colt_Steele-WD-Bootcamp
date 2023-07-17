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
