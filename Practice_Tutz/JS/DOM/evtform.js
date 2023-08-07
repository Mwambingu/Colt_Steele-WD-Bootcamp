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
    const input = eggForm.querySelector("input");
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
