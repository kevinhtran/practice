const form = document.querySelector("form");
const dittoButton = document.querySelector("#pokeapi");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const firstName = document.getElementById("firstName").value;
  const lastName = document.getElementById("lastName").value;

  document.querySelector(".result").innerHTML = `Hello ${firstName} ${lastName}`;

  form.reset();
});

dittoButton.addEventListener("click", async () => {
  const response = await fetch("https://pokeapi.co/api/v2/pokemon/ditto");
  const data = await response.json();
  console.log(data);
})




// for (let i = 3; i <= 100; i++) {
//   if (i % 3 === 0 && i % 5 === 0) {
//     console.log("fizzbuzz");
//     continue;
//   }

//   if (i % 3 === 0) {
//     console.log(i, "fizz")
//   }
//   else if (i % 5 === 0) {
//     console.log(i, "buzz")
//   }
// }




