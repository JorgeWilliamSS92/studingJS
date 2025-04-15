/*
constructors => special method for defining the properties and methods of objects.
*/

function Persons(name, age, color, gender) {
  (this.name = name),
    (this.age = age),
    (this.color = color),
    (this.gender = gender),
    (this.youAre = function () {
      console.log(
        `Your name is ${this.name} and you are ${this.age} years old. Your color is ${this.color}, and gender is ${this.gender}`
      );
    });
}

const person1 = new Persons("Jorge", 32, "white", "male");
const person2 = new Persons("Fernando", 25, "black", "other");

person1.youAre();
person2.youAre();

/*
class => (ES6 feature) provides an more atructured and cleaner way to 
work with objects compared to tradicional cosntructor function.
ex. static keyword, encapsulation, inheritance
*/

class Person {
  constructor(name, age, gender) {
    (this.name = name), (this.age = age), (this.gender = gender);
  }
  youAre() {
    console.log(`Name: ${this.name}, Age: ${this.age}, Gender: ${this.age}`);
  }
}

const person11 = new Person("William", 32, "male");
const person12 = new Person("Maria", 30, "female");

person11.youAre();
person12.youAre();
