const getRGB = () => Math.ceil(Math.random() * 255 + 1);

const body = document.querySelector("body");
const h1 = document.querySelector("h1");
const button = document.querySelector("button");
button.addEventListener("click", () => {
    let rgbValue = `${getRGB()},${getRGB()},${getRGB()}`;
    body.style = `background-color:rgb(${rgbValue})`;
    h1.innerText = `RGB (${rgbValue})`;
});
