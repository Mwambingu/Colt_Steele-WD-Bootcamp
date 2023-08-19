const player1 = {
    score: 0,
    button: document.querySelector(".player-one"),
    color: "var(--super-orange)",
    shadowColor: "#944903",
    scoreDisplay: document.querySelector(".scorep1"),
    winCry: "Player One Wins!!",
};

const player2 = {
    score: 0,
    button: document.querySelector(".player-two"),
    color: "",
    shadowColor: "",
    scoreDisplay: document.querySelector(".scorep2"),
    winCry: "Player Two Wins!!",
};

const resetBtn = document.querySelector(".reset");
const select = document.querySelector("#score-choice");

function initFeedback(player, opponent) {
    player.button.style.fontSize = "1.4em";
    setTimeout(() => {
        player.button.style.fontSize = "1.2em";
    }, 150);
    player.score += 1;
    player.scoreDisplay.innerText = player.score;
    player.scoreDisplay.style.color = player.color;
    if (player.score === Number(select.value)) {
        createWinCard(player.color, player.shadowColor, player.winCry);
        setButtonDisable([player.button, opponent.button]);
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

    container2.classList.add("container2", "container-card");
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

player1.button.addEventListener("click", function () {
    initFeedback(player1, player2);
});

player2.button.addEventListener("click", function () {
    initFeedback(player2, player1);
});

resetBtn.addEventListener("click", () => {
    resetBtn.style.fontSize = "1.4em";
    setTimeout(() => {
        resetBtn.style.fontSize = "1.2em";
    }, 150);
    buttonsDisplay = [player1.scoreDisplay, player2.scoreDisplay];
    for (let display of buttonsDisplay) {
        display.innerText = 0;
        display.style.color = "var(--dark)";
    }
    player1.score = 0;
    player2.score = 0;
    select.removeAttribute("disabled");
    select.value = "selected";
    setButtonDisable([player1.button, player2.button, resetBtn]);
    const container2 = document.querySelector(".container2");
    container2.remove();
});

select.addEventListener("change", () => {
    if (select.value !== "selected") {
        select.setAttribute("disabled", "disabled");
        setButtonEnable([player1.button, player2.button, resetBtn]);
    }
});
