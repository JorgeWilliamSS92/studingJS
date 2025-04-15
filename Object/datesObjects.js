/*
Date Objects => Objects that contain values that represent dates and times
                these date objects can be changed and formatted
*/

const date = new Date();

console.log(date);
console.log(date.getUTCFullYear(), date.getUTCMonth(), date.getUTCDate());

date.setFullYear(2023);

let dAll = [
  { year: date.getFullYear() },
  { month: date.getMonth() },
  { day: date.getDate() },
  { dayOfWeek: date.getDay() },
  { hour: date.getHours() },
  { minute: date.getMinutes() },
  { second: date.getSeconds() },
];

for (let i = 0; i <= dAll.length - (dAll.length - 3) - 1; i++) {
  console.log(dAll[i]);
}

console.log(`${call(dAll[2].day)}-${call(dAll[1].month)}-${dAll[0].year}`);

function call(n) {
  if (n <= 9) {
    return `0${n}`;
  } else {
    return n;
  }
}
