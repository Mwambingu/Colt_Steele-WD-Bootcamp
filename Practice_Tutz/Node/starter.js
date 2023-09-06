// argv -> returns an array of the command line args
console.log("Call me if you get lost!!");

if (Number(process.argv[2]) && Number(process.argv[3])) {
    const add = (a, b) => Number(a) + Number(b);

    console.log(add(process.argv[2], process.argv[3]));
}

const args = process.argv.slice(2);

// File System module
// fs
const fs = require("fs");
const fsLocation = `/home/somboch/my_repo/Colt_Steele-WD-Bootcamp/Practice_Tutz/Node/`;

function makeWebDir(location) {
    fs.mkdirSync(`${location}web_app`, { recursive: true }, (err) => {
        if (err) throw err;
    });
    fs.opendir("web_app", (err, dir) => {
        if (err) console.log(`Error: ${err}`);
        else {
            console.log("Path:", dir.path);
        }
    });

    fs.writeFileSync("./web_app/app.js", "", (err) => {
        if (err) throw err;
    });
    fs.writeFileSync("./web_app/app.css", "", (err) => {
        if (err) throw err;
    });
    fs.writeFileSync("./web_app/index.html", "", (err) => {
        if (err) throw err;
    });
}

makeWebDir(fsLocation);

// importing from modules
const myMath = require("./math");

console.log(myMath);
console.log(myMath.add(3, 7));

// importing an entire dir
const cats = require("./import_dir");
console.log(cats);
