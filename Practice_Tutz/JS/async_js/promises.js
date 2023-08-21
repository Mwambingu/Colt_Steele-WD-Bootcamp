const fakeRequestCallback = (url, success, failure) => {
    const delay = Math.floor(Math.random() * 4500) + 500;
    setTimeout(() => {
        if (delay > 4000) {
            failure("Connection Timeout :(");
        } else {
            success(`Here is you're fake data from ${url}`);
        }
    }, delay);
};

fakeRequestCallback(
    "smallsmallboy.com/page1",
    (response) => {
        console.log("It freaking worked!!");
        console.log(response);
        fakeRequestCallback(
            "smallsmallboy.com/page2",
            (response) => {
                console.log("It freaking worked!!");
                console.log(response);
            },
            (err) => {
                console.log("It failed to work");
                console.log(err);
            }
        );
    },
    (err) => {
        console.log("It failed to work");
        console.log(err);
    }
);

const fakeRequestPromise = (url) => {
    return new Promise((resolve, reject) => {
        const delay = Math.floor(Math.random() * 4500) + 500;
        setTimeout(() => {
            if (delay > 4000) {
                reject("Connection Timeout :(");
            } else {
                resolve(`Here is your fake data from ${url}`);
            }
        }, delay);
    });
};

// const request = fakeRequestPromise("yelp.com/api/coffee/page1");
// Nesting with promises
// fakeRequestPromise("yelp.com/api/coffee/page1")
//     .then((response) => {
//         console.log(response);
//         fakeRequestPromise("yelp.com/api/coffee/page2")
//             .then((response) => {
//                 console.log(response);
//                 fakeRequestPromise("yelp.com/api/coffee/page3")
//                     .then((response) => {
//                         console.log(response);
//                     })
//                     .catch((err) => {
//                         console.log(err);
//                     });
//             })
//             .catch((err) => {
//                 console.log(err);
//             });
//     })
//     .catch((err) => {
//         console.log("Error: ", err);
//     });

// Right way to use promises
fakeRequestPromise("yelp.com/api/coffee/page1")
    .then((response) => {
        console.log(response);
        return fakeRequestPromise("yelp.com/api/coffee/page2");
    })
    .then((response) => {
        console.log(response);
        return fakeRequestPromise("yelp.com/api/coffee/page3");
    })
    .then((response) => {
        console.log(response);
    })
    .catch((err) => {
        console.log(err);
    });
