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
