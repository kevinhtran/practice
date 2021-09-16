// Exploring Fetch
const result = fetch('https://pokeapi.co/api/v2/pokemon/charmander')
  .then(response => response.json())
  .then(result => console.log(result))
  .catch(error => console.error(error));

// Converting to Async Await
// Which is the more preferred way
const getPokemon = async () => {
  const result = await fetch("https://pokeapi.co/api/v2/pokemon/charmander")
  const data = await result.json()
  console.log(data)
}
getPokemon();

// Immediately-Invoked Function Expression (IIFE)

(async function () {
  const result = await fetch("https://pokeapi.co/api/v2/pokemon/charmander")
  const data = await result.json()
  console.log(data)
})()

  // Immediately-Invoked Asynchronous Arrow Functions
  // it's wrapped in parenthesis because we give it it's own scope to execute as an espression to result to a value

  (async () => {
    // fetch returns to us a promise
    // await - doesn't go to the next line until this has resolved without the await keyword
    const result = await fetch("https://pokeapi.co/api/v2/pokemon/charmander")
    // it immediately goes to the next line 
    const data = await result.json()
    console.log(data)
  })()