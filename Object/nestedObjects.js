/*
nested objects=> objects inside of other objects.
                  allows you to represent more complex data structures
                  child object is enclosed by a Parent object

                  Person{Address{}, ContactInfo{},InAndOutComes{}}
                  Shopping{Keyboard{}, Monitor{}, Mouse{}}
*/

class Person {
  constructor(name, age, isWorking = true, ...inComes) {
    this.name = name;
    this.age = age;
    this.isWorking = isWorking;
    this.inComes = new InComes(...inComes);
  }
}

class InComes {
  constructor(salary = 0, extras = 0, ...outComes) {
    this.salary = salary;
    this.extras = extras;
    this.outComes = new OutComes(...outComes);
  }
}

class OutComes {
  constructor(pays = 0, investment = 0) {
    this.pays = pays;
    this.investment = investment;
  }
}

const p0 = new Person("Jorge", 32, false, 2480, 120, 850, 1450);

// console.log(p0);
console.log(p0.inComes.salary - p0.inComes.outComes.pays);
