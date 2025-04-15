const age = [25, 45, 74, 86, 25, 36, 18, 40, 19, 25, 98];
const ageSort = age.sort();
const ageL = age.length;

let media = age.reduce(sum);
function sum(preview, next) {
  return (preview += next);
}

console.log(
  `Total: ${media} years \nQtd: ${ageL} \nMédia: ${(media / ageL).toFixed(2)}`
);

const qrt1 = ageSort[(ageL + 1) / 4];
const qrt2 = ageSort[(ageL + 1) / 2];
const qrt3 = ageSort[(3 * (ageL + 1)) / 4];

console.log(qrt1, qrt2, qrt3);

let qrtOne = [];
let qrtTwo = [];
let qrtThree = [];

// const minOutliers = ;
// const maxOutliers = ;

ageSort.forEach((n) => {
  if (n <= qrt1) {
    qrtOne.push(n);
  } else if (n <= qrt2) {
    qrtTwo.push(n);
  } else {
    qrtThree.push(n);
  }
});

console.log(`Qrt1: ${qrtOne}\nQrt2: ${qrtTwo}\nQrt3: ${qrtThree}`);
