const pokemonData = [
  {name:"Bulbasaur",
    link: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/001.png"},
  {name:"Ivysaur",
    link: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/002.png"},
  {name:"Venusaur",
    link: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/003.png"},
  {name:"Charmander",
    link: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/004.png"},
  {name:"Charmeleon",
    link: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/005.png"},
  {name:"Charizard",
    link: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/006.png"},
  {name:"Squirtle",
    link: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/007.png"},
  {name:"Wartortle",
    link: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/008.png"},
  {name:"Blastoise",
    link: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/009.png"},
  {name:"Caterpie",
    link: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/010.png"},
  {name:"Metapod",
    link: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/011.png"},
  {name:"Butterfree",
    link: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/012.png"},
  {name:"Weedle",
    link: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/013.png"},
  {name:"Kakuna",
    link: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/014.png"},
  {name:"Beedrill",
    link: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/015.png"},
]

const pokemonContainer = document.querySelector(".pokemon-container");

console.log(pokemonContainer);

for (let pokemon of pokemonData) {
  let pokemonCard = document.createElement("div");
  let pokemonImg = document.createElement("img");
  let pokemonName = document.createElement("p");
  pokemonCard.classList.add("pokemon-card");
  pokemonImg.src = pokemon.link;
  pokemonImg.classList.add("pokemon-img")
  pokemonName.innerText = pokemon.name;
  pokemonName.classList.add("pokemon-name");
  pokemonContainer.append(pokemonCard);
  pokemonCard.appendChild(pokemonImg);
  pokemonCard.appendChild(pokemonName);

}