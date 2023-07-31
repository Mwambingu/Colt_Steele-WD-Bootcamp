console.log("Dom Manipulation!!");
const h1 = document.querySelector("h1");
// h1.innerText = "Hello! You Have been hacked!";
h1.addEventListener("click", () => {
    h1.innerText = "Hello! You have been hacked!";
    h1.className = "big";
});

const bolden = document.querySelector("p b");

bolden.addEventListener("click", () => {
    bolden.innerHTML = "<i> Hacked </ >";
    bolden.setAttribute("class", "big");
});

h1.style.color = "blue";
