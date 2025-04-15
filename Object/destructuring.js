/*
destructurig => extract values from arrays and objects,
                then assign them o variable in a convenient way
                [] = to perform array destructuring 
                {} = to perform object destructuring       
*/

let a = "new";
let b = 25;

console.log(`a: ${a} / b: ${b}`);
[a, b] = [b, a];
console.log(`a: ${a} / b: ${b}`);

function print({ name, lastname, age, job = "unemployed" }) {
  console.log(
    `first name: ${name}\nlast name: ${lastname}\nage: ${age}\njob: ${job}`
  );
}

const person1 = {
  name: "jorge",
  lastname: "william",
  age: 33,
  job: undefined,
};
print(person1);

class Person {
  constructor(name, lastname, age, job = "unemployed") {
    this.name = name;
    this.lastname = lastname;
    this.age = age;
    this.job = job;
  }
  txt = function () {
    console.log(`Hi i'm ${this.name}.`);
  };
}

const p1 = new Person("Fernando", "Matias", 25, undefined);
print(p1);
p1.txt();

///////////////////////////////////////////////////////////////////////////////////////////

const colors = ["red", "white", "blue", "gray", "green"];
console.log(colors);
[colors[0], colors[4]] = [colors[4], colors[0]];

console.log(colors);
const [f1, f2, f3, ...ex] = colors;
console.log(f1, f2, f3, ex);
