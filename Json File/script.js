/*
JSON -> (JavaScript Object Notation) data-interchange format 
        used for exchanging data between a server and a wet application
        JSON files {key:value} OR [value1,value2,value3]

        JSON.stringify() -> converts a JS object to a JSON string.
        JSON.parse() -> convers a JSON string to a JS object.
*/

const array = ["Marcos", "Fernanda", "Gilmar", "Mauricio", "Julia"];
const array2 = JSON.stringify(array);
console.log(array);
console.log(array2);

let info;

fetch("object.JSON")
  .then((response) => response.json())
  .then((data) => {
    console.log(data);
    console.log(JSON.stringify(data.name));
    callinfo(data);
  })
  .catch((error) => {
    console.error("Error fetching JSON:", error);
  });

//console.log(`this is the info: ${info}`);

function callinfo(data) {
  console.log(`this is the info: ${JSON.stringify(data.name)}`);
}

fetch("objects.JSON")
  .then((returning) => returning.json())
  .then((info) => {
    info.forEach((item) => {
      console.log(item.name);
    });
  })
  .catch((error) => {
    console.error("Error fetching JSON:", error);
  });

const names = `["Marcos", "Fernanda", "Gilmar", "Mauricio", "Julia"]`;
const names2 = JSON.parse(names);
names2.forEach((name) => console.log(`names2: ${name}`));
console.log(`names: ${JSON.parse(names)}`);
