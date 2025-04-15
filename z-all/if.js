/*
const n = 2;
const d = 11.545;

try {
  if (d > 10) {
    console.log(Math.floor(n * d));
  } else if (d > 15) {
    console.log(n * d + n);
  } else {
    console.log(n + d);
  }
} catch (error) {
  console.log(error.message);
}
*/

let ages = 17;

if (ages >= 18) {
  console.log(`You're age is ${ages}, You are old anough to enter this site`);
} else {
  console.log(
    `You're age is ${ages}, You are not old anough to enter this site.`
  );
}

const d = new Date();
let time = d.getHours();

if (time < 12) {
  console.log("Good Morning!");
} else if (time < 18) {
  console.log("Good Afternoon!");
} else {
  console.log("Good Evening!");
}

const input = document.getElementById("age");
const submit = document.getElementById("submit");
const message = document.getElementById("message");
let age;

submit.onclick = function () {
  age = Number(input.value);

  if (age > 100) {
    message.textContent = `You're ${age} years old, can NOT enter this site.`;
  } else if (age >= 18) {
    message.textContent = `You're ${age} years old, CAN enter this site.`;
  } else if (age == 0) {
    message.textContent = `You're just born.`;
  } else if (age < 18) {
    message.textContent = `You're ${age} years old, can NOT enter this site.`;
  } else {
    message.textContent = `The age must be different then EMPTY`;
  }
  console.log(age);
};

/*
age = 25;
const d = new Date();
time = d.getHours;

age >= 18 ? console.log("yes") : console.log("no");
ms =
  time <= 12 ? "Good Morning!" : time <= 18 ? "Good Afternoon!" : "Good Night!";
console.log(ms);
*/
