const playerOneBtn = document.querySelector(".player-one");
const playerTwoBtn = document.querySelector(".player-two");
const resetBtn = document.querySelector(".reset");
const select = document.querySelector("#score-choice");
const scorep1 = document.querySelector(".scorep1");
const scorep2 = document.querySelector(".scorep2");

function buttonFeedback(
    buttonEl,
    scoreEl,
    selectedValue,
    btnColor,
    shadowColor,
    player_name
) {
    buttonEl.style.fontSize = "1.4em";
    setTimeout(() => {
        buttonEl.style.fontSize = "1.2em";
    }, 150);
    let value = Number(scoreEl.innerText);
    value += 1;
    scoreEl.innerText = value;
    scoreEl.style.color = btnColor;
    if (Number(value) === Number(selectedValue)) {
        createWinCard(btnColor, shadowColor, player_name);
        setButtonDisable([playerOneBtn, playerTwoBtn]);
    }
}

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

function setButtonDisable(buttonList) {
    for (let playerBtn of buttonList) {
        playerBtn.setAttribute("disabled", "disabled");
    }
}

function setButtonEnable(buttonList) {
    for (let playerBtn of buttonList) {
        playerBtn.removeAttribute("disabled");
    }
}

playerOneBtn.addEventListener("click", () => {
    buttonFeedback(
        playerOneBtn,
        scorep1,
        select.value,
        "var(--super-orange)",
        "#944903",
        "Player One Wins!!"
    );
});

playerTwoBtn.addEventListener("click", () => {
    buttonFeedback(
        playerTwoBtn,
        scorep2,
        select.value,
        "var(--maroon)",
        "#361206",
        "Player Two Wins!!"
    );
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
    setButtonDisable([playerOneBtn, playerTwoBtn, resetBtn]);
    const container2 = document.querySelector(".container2");
    container2.remove();
});

select.addEventListener("change", () => {
    if (select.value !== "selected") {
        select.setAttribute("disabled", "disabled");
        setButtonEnable([playerOneBtn, playerTwoBtn, resetBtn]);
    }
});
