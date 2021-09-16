// Exploring Fetch

const result = fetch('https://pokeapi.co/api/v2/pokemon/ditto')
  .then(response => response.json())
  .then(result => console.log(result))
  .catch(error => console.error(error));