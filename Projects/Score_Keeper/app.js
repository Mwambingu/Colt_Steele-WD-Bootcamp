const playerOneBtn = document.querySelector(".player-one");
const playerTwoBtn = document.querySelector(".player-two");
const resetBtn = document.querySelector(".reset");
const select = document.querySelector("#score-choice");
const scorep1 = document.querySelector(".scorep1");
const scorep2 = document.querySelector(".scorep2");

playerOneBtn.addEventListener("click", () => {
    playerOneBtn.style.fontSize = "1.4em";
    setTimeout(() => {
        playerOneBtn.style.fontSize = "1.2em";
    }, 150);
    let value = Number(scorep1.innerText);
    value += 1;
    scorep1.innerText = value;
    scorep1.style.color = "#ff7d00";
    if (Number(value) === Number(select.value)) {
        createWinCard("var(--super-orange)", "#944903", "Player One Wins!!");
        playerOneBtn.setAttribute("disabled", "disabled");
        playerTwoBtn.setAttribute("disabled", "disabled");
    }
});

playerTwoBtn.addEventListener("click", () => {
    playerTwoBtn.style.fontSize = "1.4em";
    setTimeout(() => {
        playerTwoBtn.style.fontSize = "1.2em";
    }, 50);
    let value = Number(scorep2.innerText);
    value += 1;
    scorep2.innerText = value;
    scorep2.style.color = "#78290f";
    if (Number(value) === Number(select.value)) {
        createWinCard("var(--maroon)", "#361206", "Player Two Wins!!");
        playerOneBtn.setAttribute("disabled", "disabled");
        playerTwoBtn.setAttribute("disabled", "disabled");
    }
});

resetBtn.addEventListener("click", () => {
    resetBtn.style.fontSize = "1.4em";
    setTimeout(() => {
        resetBtn.style.fontSize = "1.2em";
    }, 150);
    buttons = [scorep1, scorep2];
    for (let btn of buttons) {
        btn.innerText = 0;
        btn.style.color = "#001524";
    }
    select.removeAttribute("disabled");
    select.value = "selected";
    const container2 = document.querySelector(".container2");
    container2.remove();
});

select.addEventListener("change", () => {
    if (select.value !== "selected") {
        select.setAttribute("disabled", "disabled");
        playerOneBtn.removeAttribute("disabled");
        playerTwoBtn.removeAttribute("disabled");
    }
});

function createWinCard(color, shadowColor, player_name) {
    const container = document.querySelector(".container");
    const container2 = document.createElement("div");
    const congratSpan = document.createElement("span");
    const playerNameSpan = document.createElement("span");

    congratSpan.innerText = "congratulations";
    congratSpan.classList.add("congrats");
    congratSpan.style.color = color;
    congratSpan.style.textShadow = `2px 2px ${shadowColor}`;

    playerNameSpan.innerText = player_name;
    playerNameSpan.classList.add("player-name");
    playerNameSpan.style.color = color;
    playerNameSpan.style.textShadow = `1px 1px ${shadowColor}`;

    container2.classList.add("container2");
    container2.append(congratSpan);
    container2.append(playerNameSpan);
    container2.setAttribute("display", "flex");
    container.insertAdjacentElement("afterend", container2);
}
