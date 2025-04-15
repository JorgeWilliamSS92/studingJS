/*
closure => A function defined inside of another funtion,
            the inner function has access to the variables
            and scope the outer function.
            Allow for private variables and state maintenance
            Used frequently in JS frameworks: React, Vue, Angular
*/

function gamePoints() {
  let pt = 0;

  function newPoints(n, p) {
    if (p >= 0) {
      pt += p;
      console.log(`${n} tem: ${pt}pts`);
    } else {
      pt += p;
      console.log(`${n} tem: ${pt}pts`);
    }
    return p;
  }

  function name(n, p) {
    return n;
  }

  function readPoints(n, p) {
    console.log(`Total points: ${pt}pts`);
  }

  return { name, newPoints, readPoints };
}

const g1 = gamePoints();
const g2 = gamePoints();

g1.newPoints("g1", 5);
g1.newPoints("g1", -3);
g1.newPoints("g1", 0);
g2.newPoints("g2", -15);
g1.newPoints("g1", 33);
g1.newPoints("g1", +12);
g2.newPoints("g2", 8);
