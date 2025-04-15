/*
.map() => accepts a callback and applies that function 
          to each element of an array, then retur a new array
*/

const n = [1, 2, 3, 4, 5, 6, 7];

const squareN = n.map(square);
const tripleN = n.map(triple);

function square(element, index, array) {
  return Math.pow(element, index);
}

function triple(element, index, array) {
  return Math.pow(element, 3);
}

// console.log(n, squareN, tripleN);

/*---------------------------------------*/

const names = [
  "jorge william souza santana",
  "maria fernandes de miranda",
  "gustavo guanabára",
  "matheus correia xavier",
];
names.map(pascalCase);

function ar(element, index, array) {
  array[index] = element.map(pascalCase);
}
console.log(names);

function pascalCase(element, index, array) {
  let name = element.split(" ");
  let l = "";
  console.log(name);

  for (let i = 0; i < name[0].length; i++) {
    console.log(i);
    if (l === "") {
      l +=
        name[0][i].charAt(0).toUpperCase() + name[0][i].slice(1).toLowerCase();
    } else {
      l +=
        " " +
        name[0][i].charAt(0).toUpperCase() +
        name[0][i].slice(1).toLowerCase();
    }
  }

  console.log(l);
  return l;
}
