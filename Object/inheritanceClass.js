/*
inheritance => allows a new class to inherit properties and methods
                from an existing class (parent -> child)
                helps with code reusability
*/

const { del } = require("express/lib/application");

class Animal {
  alive = true;

  sleep() {
    console.log(`The ${this.name} is sleeping.`);
  }
  eat() {
    console.log(`The ${this.name} is eating.`);
  }
}

class Rabbit extends Animal {
  constructor(name, age) {
    super();
    this.name = name;
    this.age = age;
  }
}

class Dog extends Animal {
  constructor(name, age) {
    super();
    this.name = name;
    this.age = age;
  }
}

const rabbit = new Rabbit("Rabit", 2);
const dog = new Dog("Dog", 3);

console.log(dog.alive, dog.name, dog.age);
dog.eat();
dog.sleep();

/*
super() => keyword is used in classes to all te constructor or
            access the prperties and mehods of a raprent (superclass)
            this = this object
            super = the parent
*/

class Person {
  constructor(name, age, workOrStudy, time) {
    this.name = name;
    this.age = age;
    this.workOrStudy = workOrStudy;
    this.time = time;
  }
  sleep = function () {
    console.log(`The ${this.name} are spleeping.`);
  };
}

class Adult extends Person {
  constructor(name, age, work, time, salary) {
    super(name, age, work, time, salary);
    this.salary = salary;
  }
  doWhat = function () {
    console.log(`I work at ${this.work}, ${this.time} per day.`);
  };
}

class Child extends Person {
  constructor(name, age, study, time) {
    super(name, age, study, time);
  }
  doWhat = function () {
    console.log(`I work at ${this.study}, ${this.time} per day.`);
  };
}

const adult1 = new Adult("Mario", 35, "Central street", 8, 2500.0);
const child1 = new Child("Fernando", 12, "Scholl of central park", 7);

console.log(child1.name, child1.age, child1.workOrStudy, child1.time);
child1.sleep();

console.log(
  adult1.name,
  adult1.age,
  adult1.workOrStudy,
  adult1.time,
  adult1.salary
);
adult1.sleep();

/*
getter = special methods that makes a property readable
setter = special method that makes a property writeable

validate and modify a value when reading/writing a property
*/

class Book {
  constructor(name, author, deliveredYear) {
    this.name = name;
    this.author = author;
    this.deliveredYear = deliveredYear;
  }

  set name(newName) {
    if (typeof newName === "string" && newName.length > 0) {
      this._name = newName;
    } else {
      console.error(`The name of the book must be a not empty string`);
    }
  }

  set author(newAuthor) {
    if (typeof newAuthor === "string" && newAuthor.length > 0) {
      this._author = newAuthor;
    } else {
      console.error(`The name of the author must be a not empty string`);
    }
  }

  set deliveredYear(newYear) {
    if (typeof newYear === "number" && newYear > 0) {
      this._year = newYear;
    } else {
      console.error(`The year of the book must be a number greater than 0`);
    }
  }

  get name() {
    return this._name;
  }
  get author() {
    return this._author;
  }
  get deliveredYear() {
    return this._year;
  }

  get resume() {
    return console.log(`${this._name} - ${this._author} - ${this._year}`);
  }

  show = function () {
    console.log(
      `The book title is ${this.name}, the author is ${this.author} and has been deliver at year ${this.deliveredYear}`
    );
  };
}

const book1 = new Book("Hábitos atômicos", "James Clear", 2008);
const book2 = new Book("Ultra aprendizado", "Scott Young", 2002);
const book3 = new Book("O milagre da manhã", "Hal Herold", 2010);
book1.show();
book2.show();
book3.show();
book1.resume;
