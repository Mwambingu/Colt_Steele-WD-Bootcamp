const jokes = require("give-me-a-joke");
const colors = require("../colors");
console.dir(jokes);
// console.dir(colors);

jokes.getRandomDadJoke(function (joke) {
    console.log(joke.rainbow);
});
