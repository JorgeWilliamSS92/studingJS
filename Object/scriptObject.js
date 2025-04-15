/*
object=> A collections of related properties and/or methods
          Can represents real world objects(people, products, places)
          object = {key: value,
                    key: function(),}
*/

const person1 = {
  name: "William",
  lastName: "Souza",
  age: 32,
  sayHi: () => console.log(`Hi, I'm ${person1.name}. How are you?`),
};

// console.log(person1.name, person1.lastName, person1.age);
// person1.sayHi();

let people = [];

function addPerson(n, l, a) {
  let i = people.length > 0 ? people[people.length - 1].id + 1 : 1;
  people.push({
    id: i,
    name: n,
    lastName: l,
    age: a,
    sayHi: () => {
      console.log(`Hi, I'm ${n}. How are you?`);
    },
  });
}

addPerson("Matheus", "Ferreira", 45);
addPerson("Gustavo", "Miranda", 30);
people.shift();
addPerson("Anna", "Silva", 24);
addPerson("testing", "testing2", 44);

// console.log(`${people[0].sayHi()}\n${people[1].sayHi()}\n${people[2].sayHi()}`);
console.log(people);
