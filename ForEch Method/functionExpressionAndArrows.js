/*
function expressions => a way to define functions as values or variables

1. Callbacks in asynchronous operations
2. Higher-Order Functions
3. Closures
4. Event Listeners
*/

const arrayA = [1, 5, 4, 8, 7, 9, 6, 2, 3, 4];

let even = arrayA.filter((element) => {
  return element % 2 === 0;
});

let odd = arrayA.filter((element) => {
  return element % 2 !== 0;
});

const hi = setTimeout(() => {
  console.log("hi");
}, 3000);

let tEven = even.reduce((preview, element) => {
  return preview + element;
});
let tOdd = odd.reduce((preview, element) => {
  return preview + element;
});

console.log(
  `The even numbers are: ${even} \nThe odd numbers are: ${odd}\nThe total of even: ${tEven}\nThe total of odd: ${tOdd}`
);

/*
arrow functions => a concise way to write functions expressions
good for simple functions that you use only once:
  (parameters)=> some code
*/
len = [0, 1, 2, 3, 4, 5, 6, 7];
const v = len.map((element) => Math.pow(element, 3));
const v2 = len.map((element) => element * 2);
console.log(`${v} \n${v2}`);
