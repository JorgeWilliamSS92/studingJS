/*
.filter() = creates a new array by filtering out elements.
*/

let n = [1, 2, 3, 4, 5, 6, 7];

//using filter()
let evenN = n.filter(even);
let oddN = n.filter(odd);
console.log(`The inicial array = ${n}`);
console.log(`The even array = ${evenN}`);
console.log(`The even array = ${oddN}`);

function even(element) {
  return element % 2 === 0;
}

function odd(element) {
  return element % 2 !== 0;
}

//function without using filter
function evenAndOddNumbers(element) {
  let even = [];
  let odd = [];

  for (let i = 0; i < element.length; i++) {
    if (element[i] % 2 === 0) {
      even.push(element[i]);
    } else {
      odd.push(element[i]);
    }
  }
  console.log(`The even numbers are: ${even}`);
  console.log(`The odd numbers are: ${odd}`);
}
evenAndOddNumbers(n);

//using filter() again
const fruts = [
  "banana",
  "apple",
  "tomato",
  "strawberry",
  "limon",
  "mango",
  "avocado",
];
const resultsL = fruts.filter(log);
console.log(resultsL);

function log(element) {
  return element.length >= 6;
}

const resultsS = fruts.filter(short);
console.log(resultsS);

function short(element) {
  return element.length < 6;
}
