// Exploring Fetch
// const result = fetch('https://pokeapi.co/api/v2/pokemon/charmander')
//   .then(response => response.json())
//   .then(result => console.log(result))
//   .catch(error => console.error(error));

// Converting to Async Await
// Which is the more preferred way
// const getPokemon = async () => {
//   const result = await fetch("https://pokeapi.co/api/v2/pokemon/charmander")
//   const data = await result.json()
//   console.log(data)
// }
// getPokemon();

// Immediately-Invoked Function Expression (IIFE)

// (async function () {
//   const result = await fetch("https://pokeapi.co/api/v2/pokemon/charmander")
//   const data = await result.json()
//   console.log(data)
// })()

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

// Exercise
const checkIfTwo = new Promise((resolve, reject) => {
  const num = 1 + 2;
  if (num === 2) {
    resolve({ message: "number is", number: 2 });
  } else {
    reject("number is not two");
  }
});

checkIfTwo.then(
  (result) => console.log(result.message, result.number, test),
  (error) => console.log(error)
);

checkIfTwo
  .then((result) => console.log(result.message, result.number, test))
  .catch((error) => console.log(error));



const checkIfTwo = new Promise((resolve, reject) => {
  const num = 1 + 2;
  if (num === 2) {
    resolve({ message: "The number is", number: num });
  } else {
    reject("The number is not right");
  }
});

(async () => {
  try {
    const result = await checkIfTwo;
    console.log(result.message, result.number);
  } catch (error) {
    console.log(error);
  }
})();

// checkIfTwo
//   .then((message) => console.log(message.message, message.number))
//   .catch((message) => console.log(message));
