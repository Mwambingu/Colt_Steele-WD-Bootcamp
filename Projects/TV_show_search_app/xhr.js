// const xhr = new XMLHttpRequest();
// console.log(xhr);
// // if readyState === 4 data has been retrieved
// console.log(xhr.readyState);

// xhr.onreadystatechange = function () {
//     if (xhr.readyState === 4) {
//         console.log("request done!!");
//         if (xhr.status === 200) {
//             console.log("request successful");
//             console.log(xhr.responseText);
//             const data = JSON.parse(this.responseText);
//             console.log(data);
//         }

//         if (xhr.status === 404) {
//             console.log("request failed, resource not found!");
//         }
//     }
// };
// const url = "https://api.tvmaze.com/shows?page=1";

// xhr.open("GET", url, true);
// xhr.send();

// request = new XMLHttpRequest();

// request.onload = function () {
//     console.log("Loaded!");
//     console.log(this);
//     const data = JSON.parse(this.responseText);
//     console.log(data);
// };

// request.onerror = function () {
//     console.log("Error");
//     console.log(this);
// };

// request.open("GET", url);
// request.send();

// console.log(request.responseText);
