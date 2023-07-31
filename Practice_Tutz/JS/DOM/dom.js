console.log("JS Loaded");
// Selecting Elements
// By Id
document.getElementById("toc");
const banner = document.getElementById("banner");
console.log(banner);
// console.dir(banner);
// By Tag name
const paragraphs = document.getElementsByTagName("p");
console.log(paragraphs);
console.log(typeof paragraphs);

for (x of paragraphs) {
    console.log(x);
    // x.innerText = "Hello";
}
// By Class name
const images = document.getElementsByClassName("square");
console.log(images);
// rick rolled
// for (x of images) {
//     x.src =
//         "https://www.thetimes.co.uk/imageserver/image/%2Fmethode%2Fsundaytimes%2Fprod%2Fweb%2Fbin%2Fe6496bba-3356-11ec-91da-063c6e372e74.jpg?crop=2667%2C1500%2C0%2C0";
// }

// The Query Selector
// select by tag name
document.querySelector("h1");
// select by id
document.querySelector("#toc");
// select by class
document.querySelector(".square");
// Specific selections - returns the first match
document.querySelector("a[title='java']");
// Specific selections - returns all matches
document.querySelectorAll("a[title='java']");
