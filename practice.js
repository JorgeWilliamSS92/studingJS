//mergin arrays
const n = [7, 4, 4, 3, 6];
const d = ["maria", "fernando", "gustavo"];
let n2 = n.concat(d, n);

console.log(n2);

//mergin everything in one string
const newd = n.join(n, d);
console.log(newd);

//getting the index of a value at the array
console.log(n2.indexOf("fernando"));

//reversing the array values
console.log(n);
console.log(n.reverse());

//sort order the array
console.log(n.sort());

//taking the last index of a value
console.log(n.lastIndexOf(4));

//every and some (return true or false if the value has or not what you expect, and stops at the first value )
const orderC = [
  { cliente: "david", ontime: true },
  { cliente: "marcos", ontime: false },
  { cliente: "ana", ontime: true },
];

const someOutTime = orderC.some((n) => !n.ontime);
const everyOnTime = orderC.every((n) => n.ontime);
console.log(someOutTime, everyOnTime);

//.slice(start, end) returns a copy of the original array with the parameters start and end.
let people = ["jorge", "william", "souza", "santana"];
let arrayP = [];
arrayP.push(people.slice(1, 4));
console.log(arrayP);

//.forEach() go through each value and execute the activite
let newEven = [];
let newOdd = [];
n.forEach((n) => (n % 2 === 0 ? newEven.push(n) : newOdd.push(n)));

console.log(n);
console.log(newEven + "\n" + newOdd);

//f.ilter() get the values that respect the determination
console.log(n.filter((n) => n % 2 !== 0));

//.map() makes a new array that correspond to your function criterial
let vBoolean = n.map((n) => n % 2 === 0);
let vValue = n.map((n) => {
  if (n % 2 === 0) {
    return n;
  }
});
console.log(vBoolean + "\n" + vValue);

//.valueOf() return the primitive value of a object: if is a string will return a string, if a number will return a number and so on.
console.log(n.valueOf());

//.toString() return it values at a string
console.log(n.toString());
const m = [true, false];
console.log(m.valueOf());
console.log(m.toString());
