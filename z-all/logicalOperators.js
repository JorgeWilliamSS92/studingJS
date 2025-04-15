/*
logical operators; used to combine or manipuleta boolean values (true or false)
      AND = &&
      OR = ||
      NOT = !
*/

/*const temp = window.prompt("What's the tempeture?");

if (temp >= 0 && temp <= 30) {
  console.log("Weather is Good!");
} else {
  console.log("Weather is NOT good!");
}*/

//   = assignmet operator
//  == comparison operator(compare if values are equal)
// === strict equality (compare if values & datatype are equal)
//  != inequality operator
// !== strict inequality operator
const PI = 3.14;

if (PI !== "3.14") {
  console.log("This ISN'T PI");
} else {
  console.log("This is PI");
}

//The WHILE statment with and without DO
let log = false;
let user;
let password;

while (log) {
  //here the code will not execute 'cause the log is not true
  user = window.prompt("Enter you're username:");
  password = window.prompt("Enter you're password.");

  if (user === "username" && password === "user123") {
    log = true;
    console.log("You are login!");
  } else {
    console.log("User or password invalid!");
  }
}
/*do {
  user = window.prompt("Enter you're username:");
  password = window.prompt("Enter you're password.");

  if (user === "username" && password === "user123") {
    log = true;
    console.log("You are login!");
  } else {
    console.log("User or password invalid!");
  }
} while (!log);*/

//for loop = repeat some code a LIMITED amount of times

for (let c = 1; c <= 10; c++) {
  console.log(`The counter is ${c}`);
}

for (let i = 1; i <= 20; i++) {
  if (i == 13) {
    continue;
  } else if (i == 18) {
    break;
  } else {
    console.log(i);
  }
}
