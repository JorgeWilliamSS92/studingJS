let fiboArray = [1, 1, 4];

function fibonacci(n) {
  for (let i = 0; i <= n; i++) {
    let interador = fiboArray[i] + fiboArray[i + 1];
    fiboArray.push(interador);
  }
  console.log(fiboArray);
}
fibonacci(8);

function isIven(n) {
  return n % 2 === 0;
}

/*
// .every() => do until the return is false and stops
let every = [];

fiboArray.every(isIven);

const newFiboArray = fiboArray.every((f) =>
  f % 2 === 0 ? every.push(f) : undefined
);
console.log(every);

const newFiboArray2 = fiboArray.every((f) => f % 2 === 0);
// console.log(newFiboArray2);

// .some() => do until the return is true and stops
let some = [];
fiboArray.some(isIven);

const f2 = fiboArray.some((f) => (f % 2 === 0 ? some.push(f) : undefined));
// console.log(f2);

console.log(some);
*/

const m = [4, 8, 6, 10, 15, 40];
const m2 = [3, 7, 5, 9, 14, 40];

let newA = [];
m.every((f) => (f % 2 === 0 ? newA.push(f) : undefined));
console.log(newA);

let newB = [];
m2.some((f) => (f % 2 !== 0 ? newB.push(f) : undefined));
console.log(newB);

let m3 = m.concat(0, m2);
/*
m3.forEach((v) =>
  v % 2 === 0 ? console.log(`true ${v}`) : console.log(`false ${v}`)
);
*/

m3.filter((f) =>
  f % 2 === 0
    ? console.log(`${f} - True (divide for 2 the rest is zero)`)
    : console.log(`${f} - False (divide for 2 the rest is 1)`)
);

const map1 = m3.map(isIven);
console.log(map1);

const map2 = m3.filter(isIven);
console.log(map2);
