/*
forEach() = method used to iterate the elements of an array and apply a specified function(callback) to each element 
    array.forEach(callback)
    element, index, array
*/

let values = [1, 2, 3, 4, 5, 6, 7];
let names = [
  "jorge WILLIAM sOuZa",
  "marcos MIRANDA",
  "fernando miranDA fERnANDIS",
  "gustavo gUaNaBara SAntANa",
];
let n = [];

// values.forEach(double);
// print(values);
// print(n);

function double(element, index, array) {
  n.push((array[index] = element * 2) / 2);
}

function print(n) {
  console.log(n);
}

/*-------------------------------------------*/
names.forEach(pascalCase);
print(names);

function upper(element, index, array) {
  array[index] = element.toUpperCase();
}

function pascalCase(element, index, array) {
  let ar = [];
  ar.push(array[index].split(" "));
  let v = "";

  for (let i = 0; i < ar[0].length; i++) {
    if (v === "") {
      v += ar[0][i].charAt(0).toUpperCase() + ar[0][i].slice(1).toLowerCase();
    } else {
      v +=
        " " +
        ar[0][i].charAt(0).toUpperCase() +
        ar[0][i].slice(1).toLowerCase();
    }
  }
  array[index] = v;
  // console.log(array[index]);
}
