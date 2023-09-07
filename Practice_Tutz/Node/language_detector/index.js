// console.log(
//   franc(
//       "tarakilishi hutumika ofisini. Walimu na wanafunzi hupenda kutumia tarakilishi sana. Tunaomba serikali waendele na kazi mzuri. Yakueneza demokrasia ya teknolojia nchi nzima"
//   )
// );
// console.log(franc("Alle menslike wesens word vry"));

const franc = require("franc");
const langs = require("langs");
const colors = require("colors");
const args = process.argv.slice(2);
const sentence = args[0];

colors.setTheme({
    success: ["green", "bold", "underline"],
    error: ["red", "bold"],
});

const translate = (sentence) => {
    try {
        if (sentence) {
            let langISO = franc(sentence);
            if (langISO === "swh") {
                langISO = "swa";
            }
            let langObj = langs.where("3", langISO);
            let langName = langObj.name;
            console.log(langName.success);
        }
        return;
    } catch (err) {
        console.log(
            "Error: Couldn't find a match for the language!! Use a longer sentence."
                .error
        );
    }
};

translate(sentence);
