// Exploring Fetch

// const result = fetch('https://pokeapi.co/api/v2/pokemon/charmander')
//   .then(response => response.json())
//   .then(result => console.log(result))
//   .catch(error => console.error(error));

// Converting to Async Await
// Which is the more preferred way
const getPokemon = async () => {
  const result = await fetch("https://pokeapi.co/api/v2/pokemon/charmander")
  const data = await result.json()
  console.log(data)
}
getPokemon();