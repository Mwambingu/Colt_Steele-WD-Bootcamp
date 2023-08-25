axios
    .get("https://swapi.dev/api/people/1/")
    .then((res) => {
        console.log(res.data);
    })
    .catch((err) => console.log(err));

// Using async
const getStarPerson = async () => {
    const res = await axios.get("https://swapi.dev/api/people/2/");
    console.log(res.data);
};

const getJoke = async () => {
    try {
        const res = await axios({
            method: "GET",
            url: "https://icanhazdadjoke.com",
            headers: {
                Accept: "application/json",
            },
        });

        return res.data.joke;
    } catch (err) {
        return "Failed to fetch joke! Try again later!";
    }
};

const button = document.querySelector("button");
const jokeContainer = document.querySelector("#joke-container");

button.addEventListener("click", () => {
    if (document.querySelector("p")) {
        document.querySelector("p").remove();
    }
    const showJoke = async () => {
        joke = await getJoke();
        const jokeP = document.createElement("p");
        jokeP.innerText = joke;
        jokeP.classList.add(
            "is-italic",
            "is-size-5",
            "has-text-centered",
            "p-3"
        );
        jokeContainer.appendChild(jokeP);
    };

    showJoke();
});
