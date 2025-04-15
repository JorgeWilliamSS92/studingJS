/*
this => reference to the object where THIS is used
        (the object depends on the imediate context)
        person.name = this.name

note: this.obj do not work with arrow functions
*/

let people = [];

function addPerson(n, l, a) {
  let i = people.length > 0 ? people[people.length - 1].id + 1 : 1;
  people.push({
    id: i,
    name: n,
    lastName: l,
    age: a,
    sayHi: function () {
      console.log(`Hi, my name is ${this.name}, how are you?`);
    },
  });
}

addPerson("william", "sanntana", 32);
addPerson("william", "sanntana", 32);
addPerson("william", "sanntana", 32);
addPerson("william", "sanntana", 32);

console.log(people);
