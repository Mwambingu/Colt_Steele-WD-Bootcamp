const allBtns = document.querySelectorAll(".square-btn");
const numBtns = document.querySelectorAll(".nums");
const screen = document.querySelector(".calc-screen");
const signs = document.querySelectorAll(".signs");
const resetBtn = document.querySelector(".reset-btn");
const equalSign = document.querySelector(".equal-sign");
const clearBtn = document.querySelector(".clear-btn");
const dotSign = document.querySelector(".dot-sign");
let inputData = [];
let count = 0;

// for (numBtn of numBtns) {
//     console.log(numBtn.innerText);
//     numBtn.addEventListener("click", () => {
//         numBtn.classList.add("animate-btn");
//         console.log(numBtn.innerText);
//     });
// }

const calculate = (firstInput, secondInput) => {
    let num1 = Number(firstInput[0]);
    let sign = firstInput[1];
    let num2 = Number(secondInput);

    if (sign === "+") {
        return num1 + num2;
    } else if (sign === "-") {
        return num1 - num2;
    } else if (sign === "*") {
        return num1 * num2;
    } else {
        return num1 / num2;
    }
};

allBtns.forEach((allBtn) => {
    allBtn.addEventListener("click", () => {
        allBtn.classList.add("animate-btn");
        setTimeout(() => {
            allBtn.classList.remove("animate-btn");
        }, 100);
        console.log(allBtn.innerText);
    });
});

numBtns.forEach((numBtn) => {
    numBtn.addEventListener("click", () => {
        if (screen.innerText.length > 22) {
            document.querySelector(".calc-screen").innerText =
                "Error!! Exceeded Char Limit!!";
        } else {
            document.querySelector(".calc-screen").innerText +=
                numBtn.innerText;
        }
    });
});

dotSign.addEventListener("click", () => {
    if (screen.innerText === "") {
        return;
    }
    if (count >= 1) {
        return;
    }
    document.querySelector(".calc-screen").innerText += dotSign.innerText;
    count += 1;
});

signs.forEach((signs) => {
    signs.addEventListener("click", () => {
        count = 0;
        let input = screen.innerText;
        let sign = signs.innerText;
        inputData.push(input, sign);
        console.log(inputData);
        screen.innerText = "";
    });
});

equalSign.addEventListener("click", () => {
    let num2 = screen.innerText;
    result = calculate(inputData, num2);
    screen.innerText = result;
    inputData = [];
});

// Reset button functionality
resetBtn.addEventListener("click", () => {
    inputData = [];
    console.log(inputData);
    screen.innerText = "";
    count = 0;
});

// Clear button functionality
clearBtn.addEventListener("click", () => {
    let strLen = screen.innerText.length;
    screen.innerText = screen.innerText.slice(0, strLen - 1);
});
