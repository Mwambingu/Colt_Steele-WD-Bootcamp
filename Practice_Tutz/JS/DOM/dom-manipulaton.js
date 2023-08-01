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
    bolden.classList.add("big");
});


function removeHack() {
    bolden.classList.remove("big");
    h1.classList.remove("big");
}

const toc = document.querySelector("#toc");
console.log(bolden.parentElement);
const paragraph = bolden.parentElement;
console.log(paragraph.children);
console.log(paragraph.nextSibling);
console.log(paragraph.nextElementSibling);

const newH1 = document.createElement('h1');
newH1.innerText = "Mr Money Money";
document.body.appendChild(newH1);

const newImg = document.createElement("img");
newImg.src = "https://www.thetimes.co.uk/imageserver/image/%2Fmethode%2Fsundaytimes%2Fprod%2Fweb%2Fbin%2Fe6496bba-3356-11ec-91da-063c6e372e74.jpg?crop=2667%2C1500%2C0%2C0";

paragraph.append(newImg);
newImg.classList.add("square");
newImg.addEventListener("click", () => {
    paragraph.prepend(newImg)
})

newH1.addEventListener("click", () => {
    h1.insertAdjacentElement("afterend", newH1);
})

function removeEl (parent, child) {
    parent.removeChild(child);
}

function removeElTwo (el) {
    el.remove;
}