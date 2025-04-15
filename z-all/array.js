/*
array = a variable like structure that can hold more than 1 value
*/

let fruts = ["orange", "banana", "apple", "coconut"];

fruts.push("mango");
fruts.pop();
fruts.unshift("mango");
fruts.shift();
let v = fruts.indexOf("banana");
v = fruts.splice(1, 1);
v = fruts.length;

for (let f = 0; f < fruts.length; f++) {
  console.log(`Fruta index ${f} = ${fruts[f]}`);
}

let d = [];
for (let f = fruts.length - 1; f > 0; f--) {
  d.push(fruts[f]);
}
console.log(d);

console.log(fruts);
v = fruts.sort();
console.log(v);
v = fruts.sort().reverse();
console.log(v);
