/*
.reduce() => reduce the elements of an array to a single value
*/
const values = [1, 2, 3, 4, 5, 15, 61, 7, 8];
let total = values.reduce(sum);
console.log(total);

function sum(accumulater, previews) {
  return accumulater + previews;
}

let total2 = values.reduce((a, n) => {
  return n % 2 === 0 ? a + n : a + 0; //2+4+6+8
}, 0);
console.log(total2);

//max and min with reduce
//max =>
const max = values.reduce(maxv);
console.log(max);
function maxv(ac, at) {
  // return Math.max(ac, at);
  return ac >= at ? ac : at;
}

//min =>
const min = values.reduce(minv);
console.log(min);
function minv(ac, at) {
  // return Math.min(ac, at);
  return ac <= at ? ac : at;
}
