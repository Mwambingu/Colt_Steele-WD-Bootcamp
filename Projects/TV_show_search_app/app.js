const searchContainer = document.querySelector("#search-container");
const searchForm = document.querySelector("#search-form");
const search = document.querySelector("#search-input");
const moviesSection = document.querySelector("#moviesSection");
const techSelect = document.querySelector("#api-tech");
const getAllMoviesBtn = document.querySelector("#get-all-movies-btn");
const pageNumber = document.querySelector("#page-number");

let count = 0;
let divCount = 0;

const createMoviesContainer = () => {
    const container = document.createElement("div");
    container.id = "movieContainer";
    container.classList.add("columns");
    console.log(moviesSection);
    console.log(container);
    moviesSection.append(container);
    return container;
};

const createMovieCard = (movieName, imgLink, status, startDate, genres) => {
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

    cardHeader.classList.add("card-header", "hide");
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

    card.addEventListener("mouseenter", () => {
        const cardImg = card.querySelector("img");
        cardImg.classList.add("shimmer-effect");
    });

    card.addEventListener("mouseleave", () => {
        const cardImg = card.querySelector("img");
        cardImg.classList.remove("shimmer-effect");
    });

    card.append(cardImg);
    card.append(cardHeader);
    card.append(cardContent);
    card.classList.add("card");
    column.append(card);

    return column;
};

const getDataAxios = async (dataType, searchQuery, pageNumber) => {
    let fetchUrl = "";
    try {
        if (dataType === "search") {
            fetchUrl = `https://api.tvmaze.com/search/shows?q=${searchQuery}`;
            const res = await axios.get(fetchUrl);
            return res.data;
        }
        if (dataType === "getAll") {
            fetchUrl = `https://api.tvmaze.com/shows?page=${pageNumber}`;
            const res = await axios.get(fetchUrl);
            return res.data;
        }
    } catch (err) {
        console.log(err);
    }
};

const getDataFetch = async (dataType, searchQuery, pageNumber) => {
    console.log(dataType, searchQuery, pageNumber);
    let fetchUrl = "";
    try {
        if (dataType === "search") {
            fetchUrl = `https://api.tvmaze.com/search/shows?q=${searchQuery}`;
            const res = await fetch(fetchUrl);
            const data = await res.json();
            return data;
        }
        if (dataType === "getAll") {
            fetchUrl = `https://api.tvmaze.com/shows?page=${pageNumber}`;
            const res = await fetch(fetchUrl);
            const data = await res.json();
            return data;
        }
    } catch (err) {
        console.log(err);
    }
};

const addDataToPage = (data, dataType) => {
    try {
        const moviesContainer = createMoviesContainer();
        for (let movie of data) {
            console.log(movie);
            count += 1;
            if (count === 7) {
                let newMovieContainer = document.createElement("div");
                divCount += 1;
                newMovieContainer.id = `movieDiv${divCount}`;
                newMovieContainer.classList.add("columns");
                moviesSection.append(newMovieContainer);
            }
            if (count < 7) {
                if (dataType === "getAll") {
                    moviesContainer.append(
                        createMovieCard(
                            movie.name, //name
                            movie.image.medium, //img
                            movie.status, //status
                            movie.premiered, //startDate
                            movie.genres //genres
                        )
                    );
                } else {
                    let imgLink =
                        "https://eapp.org/wp-content/uploads/2018/05/poster_placeholder.jpg";
                    if (movie.show.image) {
                        imgLink = movie.show.image.medium;
                    }
                    moviesContainer.append(
                        createMovieCard(
                            movie.show.name, //name
                            imgLink, //img
                            movie.show.status, //status
                            movie.show.premiered, //startDate
                            movie.show.genres //genres
                        )
                    );
                }
            }
            if (count >= 7 && count <= 12) {
                let divStr = `#movieDiv${divCount}`;
                let newMovieContainer = document.querySelector(`${divStr}`);
                if (dataType === "getAll") {
                    newMovieContainer.append(
                        createMovieCard(
                            movie.name, //name
                            movie.image.medium, //img
                            movie.status, //status
                            movie.premiered, //startDate
                            movie.genres //genres
                        )
                    );
                } else {
                    let imgLink =
                        "https://eapp.org/wp-content/uploads/2018/05/poster_placeholder.jpg";
                    if (movie.show.image) {
                        imgLink = movie.show.image.medium;
                    }
                    newMovieContainer.append(
                        createMovieCard(
                            movie.show.name, //name
                            imgLink, //img
                            movie.show.status, //status
                            movie.show.premiered, //startDate
                            movie.show.genres //genres
                        )
                    );
                }
            }
            if (count > 12) {
                count = 6;
            }
        }
    } catch (err) {
        console.log(err);
    }
};

const removeMovies = () => {
    if (document.querySelector("#moviesSection").querySelectorAll("div")) {
        for (let div of document
            .querySelector("#moviesSection")
            .querySelectorAll("div")) {
            div.remove();
            divCount = 0;
            count = 0;
        }
    }
};

techSelect.addEventListener("change", async () => {
    if (techSelect.value !== "") {
        searchContainer.classList.remove("hide");
        pageNumber.removeAttribute("disabled");
        getAllMoviesBtn.removeAttribute("disabled");
    }
    if (techSelect.value === "selected") {
        searchContainer.classList.add("hide");
        moviesSection.classList.add("hide");
        pageNumber.setAttribute("disabled", true);
        getAllMoviesBtn.setAttribute("disabled", true);
    }
});

searchForm.addEventListener("submit", async (evt) => {
    evt.preventDefault();
    if (search.value !== "") {
        removeMovies();
        let movies = null;
        moviesSection.classList.remove("hide");
        if (techSelect.value === "axios") {
            movies = await getDataAxios("search", search.value, null);
        }

        if (techSelect.value === "fetch-api") {
            movies = await getDataFetch("search", search.value, null);
        }
        if (movies) {
            addDataToPage(movies);
        }
    }
});

getAllMoviesBtn.addEventListener("click", async (evt) => {
    removeMovies();

    if (pageNumber.value === "selected") {
        alert("Error!! No page has been selected");
    } else {
        moviesSection.classList.remove("hide");
        if (techSelect.value === "axios") {
            const movies = await getDataAxios("getAll", null, pageNumber.value);
            addDataToPage(movies, "getAll");
        }
        if (techSelect.value === "fetch") {
            const movies = await getDataFetch("getAll", null, pageNumber.value);
            addDataToPage(movies, "getAll");
        }
    }
});
