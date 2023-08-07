function talk() {
    alert("Stop disturbing me!");
}

const btn2 = document.querySelector("#btn2");

// btn2.onclick = talk;
btn2.onclick = () => {
    btn2.classList.remove("btn-danger");
    btn2.classList.add("btn-success");
    alert("You passed the test punk!!");
};

btn2.onmouseenter = () => {
    btn2.classList.remove("btn-primary");
    btn2.classList.add("btn-danger");
};

const btn3 = document.querySelector("#btn3");
const classes = ["btn", "btn-warning", "fw-bold", "text-uppercase", "fs-5"];
const clearMetamorph = () => {
    btn3.classList.remove(...classes);
};

btn3.addEventListener("click", () => {
    btn3.classList.add(...classes);
});
btn3.addEventListener("click", () => {
    setTimeout(clearMetamorph, 5000);
});

// event Object
document.querySelector("#btn4").addEventListener("click", (evt) => {
    console.log(evt);
    if (evt.clientX > 30) {
        alert("That's the right side!");
    } else if (evt.clientX < 10) {
        alert("That's the left side!");
    } else {
        alert("That's the center man!!");
    }
});

const input = document.querySelector("input");
input.addEventListener("keyup", (evt) => {
    console.log("Key Up");
});
input.addEventListener("keydown", (evt) => {
    console.log(evt.key);
    console.log(evt.code);
});

window.addEventListener("keydown", (evt) => {
    switch (evt.code) {
        case "ArrowUp":
            alert("UP");
            break;
        case "ArrowDown":
            alert("DOWN");
            break;
        case "ArrowLeft":
            alert("LEFT");
            break;
        case "ArrowRight":
            alert("RIGHT");
            break;
        default:
            break;
    }
});

// New event versions --> Form Events
