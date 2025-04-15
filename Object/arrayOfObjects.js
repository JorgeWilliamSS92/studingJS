/*
array of objects
*/

const fruts = [
  { name: "banana", color: "yeallow", calories: 110 },
  { name: "apple", color: "red", calories: 105 },
  { name: "avocado", color: "green", calories: 230 },
  { name: "strawberry", color: "red", calories: 75 },
  { name: "limon", color: "green", calories: 32 },
  { name: "orange", color: "orange", calories: 57 },
];

//---------------Using methods---------------//

//.forEach() => go through every index of the array
fruts.forEach((f) => console.log(`The frut is ${f.name}`));

//.map()
const mapFrut = fruts.map((f) => f.name);
console.log(mapFrut);

//.filter()
const filterFrut = fruts.filter((f) => (f.calories >= 100 ? f : ""));
filterFrut.forEach((l) => console.log(l.name, l.calories));

//.reduce()
const reduceMinFrut = fruts.reduce((min, frut) =>
  min.calories < frut.calories ? min : frut
);
const reduceMaxFrut = fruts.reduce((max, frut) =>
  max.calories >= frut.calories ? max : frut
);
console.log(
  `Min: ${reduceMinFrut.name} - ${reduceMinFrut.color} - ${reduceMinFrut.calories}\nMax: ${reduceMaxFrut.name} -${reduceMaxFrut.color} -  ${reduceMaxFrut.calories}`
);

/*
//.push() - add a new object/value at the end of an array
fruts.push({ name: "Mango", color: "yellow", calories: 124 });
fruts.push({ name: "watermelon", color: "green", calories: 78 });
console.log(fruts[fruts.length - 1]);

//.pop() - delete the last index of a array
fruts.pop();
console.log(fruts[fruts.length - 1]);

//.shift() - delete the first indes of a array
console.log(fruts[[0]]);
fruts.shift();
console.log(fruts[[0]]);

//.unshift() - add a new object/value at the beginning of the array
console.log(fruts[[0]]);
fruts.unshift({ name: "banana", color: "yeallow", calories: 110 });
console.log(fruts[[0]]);
*/

//.sort() - order the values in the array
let newFruts = fruts.sort((a, b) => a.calories - b.calories);
console.log(newFruts);

newFruts.sort((a, b) => b.name.localeCompare(a.name));
console.log(newFruts);

let n = ["william", "maria", "ana", "cleilda"];
console.log(n.sort((a, b) => b.localeCompare(a)));
