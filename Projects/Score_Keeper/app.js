const playerOneBtn = document.querySelector(".player-one");
const playerTwoBtn = document.querySelector(".player-two");
const resetBtn = document.querySelector(".reset");
const select = document.querySelector("#score-choice");
const scorep1 = document.querySelector(".scorep1");
const scorep2 = document.querySelector(".scorep2");

playerOneBtn.addEventListener("click", () => {
    let value = Number(scorep1.innerText);
    value += 1;
    scorep1.innerText = value;
    scorep1.style.color = "#ff7d00";
    if (Number(value) === Number(select.value)) {
        alert("Player 1 Wins");
        playerOneBtn.setAttribute("disabled", "disabled");
        playerTwoBtn.setAttribute("disabled", "disabled");
    }
});

playerTwoBtn.addEventListener("click", () => {
    let value = Number(scorep2.innerText);
    value += 1;
    scorep2.innerText = value;
    scorep2.style.color = "#78290f";
    if (Number(value) === Number(select.value)) {
        alert("Player 2 Wins");
        playerOneBtn.setAttribute("disabled", "disabled");
        playerTwoBtn.setAttribute("disabled", "disabled");
    }
});

resetBtn.addEventListener("click", () => {
    buttons = [scorep1, scorep2];
    for (let btn of buttons) {
        btn.innerText = 0;
        btn.style.color = "#001524";
        btn.removeAttribute("disabled");
    }
    select.removeAttribute("disabled");
    select.value = "";
});

select.addEventListener("change", () => {
    if (select.value !== "") {
        select.setAttribute("disabled", "disabled");
    }
});
