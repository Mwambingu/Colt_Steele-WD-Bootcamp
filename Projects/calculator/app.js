const numBtns = document.querySelectorAll(".square-btn");

// for (numBtn of numBtns) {
//     console.log(numBtn.innerText);
//     numBtn.addEventListener("click", () => {
//         numBtn.classList.add("animate-btn");
//         console.log(numBtn.innerText);
//     });
// }

numBtns.forEach((numBtn) => {
    numBtn.addEventListener("click", () => {
        numBtn.classList.add("animate-btn");
        setTimeout(() => {
            numBtn.classList.remove("animate-btn");
        }, 100);
        console.log(numBtn.innerText);
    });
});

numBtns.forEach((numBtn) => {
    numBtn.addEventListener("click", () => {
        document.querySelector(".calc-screen").innerText += numBtn.innerText;
    });
});
