/*
callback -> a function that is passed as an argument to another function.
used to handle asynchronus operations:
1. Reading a file
2. Network requests
3. Interacting with databases

"Hey, when you're done, call this next."
*/

/*
const bh1 = document.getElementById("bh1");

bh1.addEventListener("click", function somar() {
  let x = document.getElementById("n1").value;
  let y = document.getElementById("n2").value;
  let result = Number(x) + Number(y);
  show(result);
});

function show(result) {
  document.getElementById("h1").textContent = `Resultado: ${result}`;
}
*/

let x = window.prompt("Digite o primeiro número:");
let y = window.prompt("Digite o segundo número:");
sum(result, x, y);

function sum(callback, x, y) {
  let result = Number(x) + Number(y);
  callback(result);
}

function result(result) {
  console.log(result);
}
