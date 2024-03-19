const form = document.querySelector("form");
const totalSpan = document.querySelector(".total");

const months = [
    "jan",
    "feb",
    "mar",
    "apr",
    "may",
    "jun",
    "jul",
    "ast",
    "sep",
    "oct",
    "nov",
    "dec",
];

const monthsReverse = months.reverse();

const rangeCalc = (range, monthlyContribution, total) => {
    if (range === 1) {
        total = monthlyContribution * (range / 13);
        return total;
    }

    console.log(monthlyContribution);

    total = monthlyContribution * (range / 13);
    console.log(total);
    return total + rangeCalc(range - 1, monthlyContribution, total);
};
const weightedAvg = (monthlyContribution, range, interestRate) => {
    let totalAvg = 0;
    let rangeAvg = rangeCalc(range, monthlyContribution, totalAvg);

    return (interestRate / 100) * rangeAvg;
};

form.addEventListener("submit", (evt) => {
    evt.preventDefault();
    try {
        let monthlyDeposit = Number(document.querySelector("#deposit").value);
        let interestRate = Number(
            document.querySelector("#interestRate").value
        );
        let startMonth = document.querySelector("#startMonth").value;

        console.log(monthsReverse);
        console.log(monthsReverse.indexOf(startMonth) + 1);

        let total = weightedAvg(
            monthlyDeposit,
            monthsReverse.indexOf(startMonth) + 1,
            interestRate
        );
        totalSpan.innerText = Math.round(total * 100) / 100;
    } catch (e) {
        console.log(e);
        alert("Entered characters aren't numbers!");
    }

    // alert(
    //     `Kes ${monthlyDeposit} ${interestRate}% month ${
    //         months.indexOf(startMonth) + 1
    //     }`
    // );
});

// console.log("SessionStac".slice(-1));
// console.log("SessionStac".slice(0, -1));
