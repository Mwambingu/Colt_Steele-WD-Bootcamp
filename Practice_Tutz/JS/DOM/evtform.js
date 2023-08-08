const randColor = () => {
    let colorStr = "";
    let randColor1 = Math.floor(Math.random() * 255 + 1);
    let randColor2 = Math.floor(Math.random() * 255 + 1);
    let randColor3 = Math.floor(Math.random() * 255 + 1);
    return (colorStr = `rgb(${randColor1}, ${randColor2}, ${randColor3})`);
};
const formShelter = document.querySelector("#shelterform");

formShelter.addEventListener("submit", (evt) => {
    evt.preventDefault();
    console.log("Submitting.....");
});

const container = document.querySelector(".container");
const eggForm = document.querySelector("#egg-form");
const aLink = container.querySelector("a");
const eggTitle = document.querySelector("#egg-title");
const eggTitle2 = document.querySelector("#egg-title2");
const eggInput = eggForm.querySelector("input");
const eggBtn = eggForm.querySelector("button");

eggForm.addEventListener("submit", (evt) => {
    evt.preventDefault();
    const input = eggForm.elements.eggInput;
    if (Number(input.value)) {
        eggTitle.innerText =
            "Great. Seem to be within delivery distance. We will be reaching out soon.";
        eggForm.remove();
        aLink.remove();
        eggTitle2.remove();
    } else {
        if (!document.querySelector(".container input[type=email]")) {
            eggTitle.innerText = `Sorry we don't deliver to ${input.value}`;
            eggTitle2.innerText = `Hope to be there soon. Be the first to know when we deliver to ${input.value}`;
            const eggEmail = document.createElement("input");
            const eggEmailBtn = document.createElement("button");
            eggEmail.type = "email";
            eggEmail.placeholder = "Enter email";
            eggEmailBtn.type = "submit";
            eggEmailBtn.innerText = "Enter";
            eggEmailBtn.id = "submit-btn";

            eggForm.append(eggEmail);
            eggForm.append(eggEmailBtn);
            eggInput.remove();
            eggBtn.remove();
            aLink.remove();
        }
    }
});

const changeEvent = document.querySelector("#changeEvent");
const changeH1 = document.querySelector("#changeH1");
changeEvent.addEventListener("change", (evt) => {
    console.log(changeEvent.value);
    changeH1.innerText = changeEvent.value;
});

const inputEvent = document.querySelector("#inputEvent");
const inputH1 = document.querySelector("#inputH1");
inputEvent.addEventListener("input", (evt) => {
    if (inputEvent.value) {
        inputH1.innerText = inputEvent.value;
    } else {
        inputH1.innerText = "Input Event";
    }
});

const changeColor = document.querySelector("#change-color");
const divToHide = document.querySelector("#div-to-hide");

changeColor.addEventListener("click", (evt) => {
    divToHide.style.backgroundColor = randColor();
    evt.stopPropagation();
});

divToHide.addEventListener("click", (evt) => {
    divToHide.classList.toggle("hide");
});

// Event delegation
const lis = document.querySelectorAll("li");
const list = document.querySelector("#list");

list.addEventListener("click", (evt) => {
    console.log(evt);
    console.log(evt.target);
    console.log(evt.target.tagName);
    if (evt.target.tagName === "LI") {
        evt.target.remove();
    }
});
// for (let li of lis) {
//     li.addEventListener("click", (evt) => {
//         li.remove();
//     });
// }

const tweetForm = document.querySelector("#tweetForm");

tweetForm.addEventListener("submit", (evt) => {
    evt.preventDefault();
    let username = tweetForm.elements.username.value;
    let tweet = tweetForm.elements.tweet.value;

    const newLi = document.createElement("li");
    newLi.classList.add("bigger");
    newLi.innerHTML = `<b>${username}</b> -- ${tweet}`;
    list.appendChild(newLi);
    tweetForm.elements.username.value = "";
    tweetForm.elements.tweet.value = "";
});
