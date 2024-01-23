const squareBtns = document.querySelectorAll(".square-btn");

for (squareBtn of squareBtns) {
    console.log(squareBtn.innerText);
    squareBtn.addEventListener("click", () => {
        alert("Hello");
    });
}
