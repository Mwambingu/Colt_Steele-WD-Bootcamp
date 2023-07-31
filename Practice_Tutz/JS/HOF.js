// Higher Order Functions -> functions that operates on or with other functions
function greet(name) {
    console.log("Hello!" + name);
}

const greetPeople = function (func, name) {
    func(name);
    func(name);
};

const calcMethods = function (method) {
    if (method === "add" || method === "+") {
        return function (num1, num2) {
            return num1 + num2;
        };
    }
    if (method === "subtract" || method === "-") {
        return function (num1, num2) {
            return num1 - num2;
        };
    }
    if (method === "multiply" || method === "*") {
        return function (num1, num2) {
            return num1 * num2;
        };
    }

    return null;
};

// Methods
const calculator = {
    add: function (num1, num2) {
        return num1 + num2;
    },
    subtract: function (num1, num2) {
        return num1 - num2;
    },
    multiply: function (num1, num2) {
        return num1 * num2;
    },
    // Shorthand
    square(num) {
        return num ** 2;
    },
    cube(num) {
        return num ** 3;
    },
};

// This Keyword -> The value of this depends on the invocation context of the function it's used in
const human = {
    firstName: "Robertson",
    age: "31",
    gender: "male",
    vocation: "Arms Dealer",
    workStatus: "working",
    profile() {
        return `My name is ${this.firstName} a ${this.age} year old ${this.gender}. I am an ${this.vocation} and i'm currently ${this.workStatus}`;
    },
    profile2(firstName, age, gender, vocation, workStatus) {
        return `My name is ${firstName} a ${age} year old ${gender}. I am an ${vocation} and i'm currently ${workStatus}`;
    },
    profile3() {
        console.log(
            `My name is ${this.firstName} a ${this.age} year old ${this.gender}. I am an ${this.vocation} and i'm currently ${this.workStatus}`
        );
        function working() {
            console.log(`Are you working:\nYes I am ${this.workStatus}`);
        }
        working();
    },
};

// Try & Catch Errors JS

const human2 = "Roberto";

try {
    human2 = "Maria";
} catch (e) {
    console.log("human2 cannot be reassigned it's a const variable!!");
    console.log(e);
}

human2 = "Maria";
