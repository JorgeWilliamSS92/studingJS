/*
spread operator = ...
allows an iterable such as an array or string to be expanded into seperate elements (unpacks the elements)
*/

let fruts = ["banana", "apple", "coconut"];
console.log(...fruts);

let newFruts = [...fruts];
console.log(newFruts);

let name = "jorge william";
console.log(name.includes("jorge"));
console.log(...name);
let newName = [...name];
console.log(newName);
console.log(newName.join("-"));
console.log(newName.concat("-----------"));
console.log(newName.reverse().join(""));

/*
rest parameters = (...rest) allow a function work with a variable number of arguments by bundling them into an array 
spread = expands an array into separate elements 
rest = bundles separate elements into an array
*/
let f1 = "jorge";
let f2 = 32;
let f3 = "masculino";
let f4 = "25/03/1992";
let f5 = "maria";
let f6 = 52;
let f7 = "feminino";
let f8 = "25/03/1954";

let persons = [];
function restElements(...foods) {
  persons.push(foods);
  console.log(persons);
}

restElements(f1, f2, f3, f4);
restElements(f5, f6, f7, f8);

console.log(...persons[0], ...persons, ...persons[1]);

//ex 2
function sum(...numbers) {
  let resul = 0;
  let i = [];

  for (let n of numbers) {
    resul += n;
  }
  for (let num in numbers) {
    i.push(num);
  }
  console.log(`The amount is R$${resul} / Max position:${i[i.length - 1]}`);
}

sum(5, 45, 9, 8, 5);
