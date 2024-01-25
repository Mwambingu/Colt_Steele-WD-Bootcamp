const allBtns = document.querySelectorAll(".square-btn");

// for (numBtn of numBtns) {
//     console.log(numBtn.innerText);
//     numBtn.addEventListener("click", () => {
//         numBtn.classList.add("animate-btn");
//         console.log(numBtn.innerText);
//     });
// }

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
        document.querySelector(".calc-screen").innerText += numBtn.innerText;
    });
});
