const searchContainer = document.querySelector("#search-container");
const searchForm = document.querySelector("#search-form");
const moviesSection = document.querySelector("#moviesSection");
const techSelect = document.querySelector("#api-tech");
const getAllMoviesBtn = document.querySelector("#get-all-movies-btn");
const pageNumber = document.querySelector("#page-number");

const imgLink =
    "https://images.unsplash.com/photo-1686256282146-46dd71827a36?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8M3x8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60";

const createMoviesContainer = () => {
    const container = document.createElement("div");
    container.id = "movieContainer";
    container.classList.add("columns");
    console.log(moviesSection);
    console.log(container);
    moviesSection.append(container);
    return container;
};

const createCard = (movieName, imgLink, status, startDate, genres) => {
    const column = document.createElement("div");
    const card = document.createElement("div");
    const cardImg = document.createElement("div");
    const cardHeader = document.createElement("div");
    const cardContent = document.createElement("div");
    const figure = document.createElement("figure");
    const img = document.createElement("img");
    const cardHeaderTitle = document.createElement("div");
    const statusDiv = document.createElement("div");
    const dateDiv = document.createElement("div");
    const genresDiv = document.createElement("div");

    column.classList.add("column", "is-2");

    cardContent.append(statusDiv);
    cardContent.append(dateDiv);
    cardContent.append(genresDiv);

    cardHeader.append(cardHeaderTitle);
    cardImg.append(figure);
    figure.append(img);

    cardImg.classList.add("cardImg");
    figure.classList.add("image", "is-2by3");
    img.src = `${imgLink}`;

    cardHeader.classList.add("card-header");
    cardHeaderTitle.classList.add("card-header-title");
    cardHeaderTitle.innerText = `${movieName}`;

    cardContent.classList.add("card-content", "hide");
    for (x of [statusDiv, dateDiv, genresDiv]) {
        x.classList.add("mb-1");
    }

    statusDiv.innerHTML = `<span class="has-text-weight-bold">Status:<span> <span class="has-text-weight-light">${status}</span>`;
    dateDiv.innerHTML = `<span class="has-text-weight-bold">Premiered:<span> <span class="has-text-weight-light">${startDate}</span>`;
    genresDiv.innerHTML = `<span class="has-text-weight-bold">Genres:<span>`;

    if (typeof genres === "object") {
        for (x of genres) {
            genresDiv.innerHTML += ` <span class="tag is-primary">${x}<span>`;
        }
    } else {
        genresDiv.innerHTML += ` <span class="tag is-primary">${genres}<span>`;
    }

    card.append(cardImg);
    card.append(cardHeader);
    card.append(cardContent);
    card.classList.add("card");
    column.append(card);

    return column;
};

const getData = async (dataType, searchQuery, pageNumber) => {
    console.log(dataType, searchQuery, pageNumber);
    try {
        if (dataType === "search") {
            const res = await fetch(
                `https://api.tvmaze.com/search/people?q=${searchQuery}`
            );
            const data = await res.json();
            return data;
        }
        if (dataType === "getAll") {
            const fetchUrl = `https://api.tvmaze.com/shows?page=${pageNumber}`;
            console.log(fetchUrl);
            const res = await fetch(fetchUrl);
            const data = await res.json();

            return data;
        }
    } catch (err) {
        console.log(err);
    }
};

const addDataToPage = (data) => {
    const moviesContainer = createMoviesContainer();
    for (let movie of data) {
        count += 1;
        if (count === 7) {
            let newMovieContainer = document.createElement("div");
            divCount += 1;
            newMovieContainer.id = `movieDiv${divCount}`;
            newMovieContainer.classList.add("columns");
            moviesSection.append(newMovieContainer);
        }
        if (count < 7) {
            moviesContainer.append(
                createCard(
                    movie.name, //name
                    movie.image.medium, //img
                    movie.status, //status
                    movie.premiered, //startDate
                    movie.genres //genres
                )
            );
        }
        if (count >= 7 && count <= 12) {
            let divStr = `#movieDiv${divCount}`;
            console.log(divStr);
            let newMovieContainer = document.querySelector(
                `#movieDiv${divCount}`
            );
            newMovieContainer.append(
                createCard(
                    movie.name, //name
                    movie.image.medium, //img
                    movie.status, //status
                    movie.premiered, //startDate
                    movie.genres //genres
                )
            );
        }
        if (count > 12) {
            count = 6;
        }
        console.log(count);
    }
};

let count = 0;
let divCount = 0;

techSelect.addEventListener("change", async () => {
    if (techSelect.value !== "") {
        searchContainer.classList.remove("hide");
        if (techSelect.value === "xhr") {
            console.log(techSelect.value);
        }
        if (techSelect.value === "axios") {
            console.log(techSelect.value);
        }
        if (techSelect.value === "fetch-api") {
            console.log(techSelect.value);
        }
    }
    if (techSelect.value === "selected") {
        searchContainer.classList.add("hide");
        moviesSection.classList.add("hide");
    }
});

searchForm.addEventListener("submit", async (evt) => {
    evt.preventDefault();
    console.log("Search is searching!!");
});

getAllMoviesBtn.addEventListener("click", async (evt) => {
    if (document.querySelector("#moviesSection").querySelectorAll("div")) {
        for (let div of document
            .querySelector("#moviesSection")
            .querySelectorAll("div")) {
            div.remove();
            divCount = 0;
            count = 0;
        }
    }

    if (pageNumber.value === "selected") {
        alert("Error!! No page has been selected");
    } else {
        moviesSection.classList.remove("hide");
        const movies = await getData("getAll", null, pageNumber.value);
        console.log(movies);
        addDataToPage(movies);
    }
});
