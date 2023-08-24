// Using XMLHttpRequest to access API's
const swapiLink = "https://swapi.dev/api/people/1";
request = new XMLHttpRequest();

request.onload = function () {
    console.log("Loaded!");
    console.log(this);
    const data = JSON.parse(this.responseText);
    console.log(data);
};

request.onerror = function () {
    console.log("Error");
    console.log(this);
};

request.open("GET", swapiLink);
request.send();

console.log(request.responseText);

const icanLink = "https://icanhazdadjoke.com/";

const request2 = new XMLHttpRequest();

request2.onload = function () {
    console.log("Loaded!!!!");
    const data2 = JSON.parse(this.responseText);
    console.log(data2);
};

request2.onerror = function (err) {
    console.log("Error!", err);
};

request2.open("get", icanLink, true);
request2.setRequestHeader("Accept", "application/json");
request2.send();

// Using the Fetch Api
fetch("https://swapi.dev/api/people/1")
    .then((res) => {
        console.log("Data has been fetched...");
        console.log(res);
        // res.json returns a promise
        return res.json();
    })
    .then((data) => {
        console.log(data);
        // making a second request
        return fetch("https://swapi.dev/api/people/2");
    })
    .then((res) => {
        console.log(res);
        return res.json();
    })
    .then((data) => {
        console.log(data);
    })
    .catch((err) => {
        console.log("Failed to fetch data...");
        console.log(err);
    });

fetch("https://icanhazdadjoke.com", {
    headers: { Accept: "application/json" },
})
    .then((res) => {
        console.log("fetching Ican");
        return res.json();
    })
    .then((data) => console.log(data))
    .catch((err) => console.log(err));

// fetch using async functions

const getStarwars = async (id) => {
    try {
        const res = await fetch(`https://swapi.dev/api/people/${id}`);
        const data = await res.json();
        console.log(`${id}. ${data.name}`);
    } catch (err) {
        console.log(`Failed to fetch: ${err}`);
    }
};

const getJoke = async () => {
    try {
        const res = await fetch("https://icanhazdadjoke.com", {
            headers: { Accept: "application/json" },
        });
        const data = await res.json();
        console.log("Loading joke.....");
        console.log(data.joke);
    } catch (err) {}
};

// for (let i = 1; i < 10; i++) {
//     getStarwars(i);
// }
