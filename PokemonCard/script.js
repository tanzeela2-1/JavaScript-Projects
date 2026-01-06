const card = document.querySelector('.pokemon-card');
const listViewBtn = document.querySelector('#list');
const gridViewBtn = document.querySelector('#grid');
const pokemonList = document.querySelector('.pokemon-list');
const typeColors = {
  fire: '#FDDFDF',
  grass: '#DEFDE0',
  electric: '#FCF7DE',
  water: '#DEF3FD',
  ground: '#f4e7da',
  rock: '#d5d5d4',
  fairy: '#fceaff',
  poison: '#98d7a5',
  bug: '#f8d5a3',
  dragon: '#97b3e6',
  psychic: '#eaeda1',
  flying: '#F5F5F5',
  fighting: '#E6E0D4',
  normal: '#F5F5F5',
  ice: '#e0f5ff',
  ghost: '#dbb8ff',
  dark: '#c8c6c6',
  steel: '#e3e3e3',
};
async function fetchPokemonList() {
  const res = await fetch('https://pokeapi.co/api/v2/pokemon?limit=20');
  if (!res.ok) throw new Error('Failed to load list: ' + res.status);
  const data = await res.json();
  console.log(data.results);
  return data.results;
}
async function getPokemonDetails() {
  const pokemon = await fetchPokemonList(); // call Step 1 firsts
  const details = await Promise.all(
    pokemon.map(async (pk) => {
      const res = await fetch(pk.url);
      const data = await res.json();
      console.log(data);
      return data;
    })
  );
  return details;
}
function renderPokemonList(details) {
  const html = `
  <div class="pokemon-box" style="border:2px solid ${
    typeColors[details?.types?.[0].type.name]
  }">
  <div class="list-view">
        <h3>${details.name}</h3>
        <img src="${
          details.sprites.other['official-artwork'].front_default
        }" alt="${details.name}">
        <p><strong>ID:</strong> ${details.id}</p>
        <p><strong>Type:</strong> ${details.types[0].type.name}</p>
        <p><strong>Height:</strong> ${details.height}</p>
        <p><strong>Weight:</strong> ${details.weight}</p>
        </div>
        </div>
      `;
  pokemonList.insertAdjacentHTML('beforeend', html);
}
function renderPokemonGrid(details) {
  const html = `
  <div>
        <h3>${details.name}</h3>
        <img src="${details.sprites.other['official-artwork'].front_default}" alt="${details.name}">
        <p><strong>ID:</strong> ${details.id}</p>
        <p><strong>Type:</strong> ${details.types[0].type.name}</p>
        <p><strong>Height:</strong> ${details.height}</p>
        <p><strong>Weight:</strong> ${details.weight}</p>
        </div>
      `;

  card.insertAdjacentHTML('beforeend', html);
}
listViewBtn.addEventListener('click', async () => {
  card.innerHTML = '';
  const data = await getPokemonDetails();
  data.forEach((pokemon) => renderPokemonList(pokemon));
});
gridViewBtn.addEventListener('click', async () => {
  pokemonList.innerHTML = '';
  const data = await getPokemonDetails();
  data.forEach((pokemon) => renderPokemonGrid(pokemon));
});
window.addEventListener('load', async () => {
  const data = await getPokemonDetails();
  data.forEach((pokemon) => renderPokemonGrid(pokemon));
});
