const figlet = require("figlet");

figlet("Hello World!!", function (err, data) {
    if (err) {
        console.log("Something went wrong");
        console.dir(err);
        return;
    }
    console.log(data);
});

// async function figgyWord(word) {
//     const data = await figlet(word);
//     console.log(data);
// }

// figgyWord("U Suck!!");
