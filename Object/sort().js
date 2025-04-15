/*
.sort() => method used to sort elements of an array i place.
            sorts elements as strings in lexicographic order, not alphabetical
            lexicographic = (alphabet + numbers + symbols) as strings


How Does It Work?
The comparison is done character by character, using the order of Unicode (or ASCII) values. 
If two elements have the same prefix, the comparison moves to the next different character.

Important Rules in Lexicographic Order
  1. Based on Unicode values (not the meaning of words).
  2. Uppercase letters come before lowercase letters, because "A" (65) has a smaller Unicode value than "a" (97).
  3. Numbers come before letters, because "0" (48) has a smaller Unicode value than "A" (65).
  4. If one name is a prefix of another, the shorter one comes first.
            */
           
const fruts = [
  { name: "banana", color: "yeallow", calories: 110 },
  { name: "apple", color: "red", calories: 105 },
  { name: "avocado", color: "green", calories: 230 },
  { name: "strawberry", color: "red", calories: 75 },
  { name: "limon", color: "green", calories: 32 },
  { name: "orange", color: "orange", calories: 57 },
];

let newFruts = fruts.sort((a, b) => a.calories - b.calories);
console.log(newFruts);

newFruts.sort((a, b) => b.name.localeCompare(a.name));
console.log(newFruts);

let n = ["william", "maria", "ana", "cleilda"];
console.log(n.sort((a, b) => b.localeCompare(a)));
console.log(n.sort((a, b) => a.localeCompare(b)));
