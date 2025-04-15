/*
static => keyword that defines properties or methods that belong
          to a classe itself rather than the objects created 
          from that class.(class owns anything static, not the objects)
*/

class Metho {
  static PI = 3.14159;

  static sum(v) {
    return v + this.PI;
  }
  static mult(v) {
    return v * this.PI;
  }
  static squar(v) {
    return Math.pow(this.PI, v);
  }
  static squar2(v) {
    return this.PI ** v;
  }
}

console.log(Metho.PI);

console.log(Metho.sum(2));

console.log(Metho.mult(2));

console.log(Metho.squar(2));
console.log(Metho.squar2(2));

class Person {
  static userCount = 0;

  constructor(newPerson) {
    this.newPerson = newPerson;
    Person.userCount++;
    console.log(this.newPerson);
  }

  static v = function () {
    console.log(Person.userCount);
  };
}

const person1 = new Person("jorge");
const person2 = new Person("maria");
const person3 = new Person("João");

Person.v();
