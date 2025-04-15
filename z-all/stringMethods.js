//string methods: allow you to manipulate and work with text (strings)
let name = "Jorge William Souza Santana";

console.log(name.charAt(0));
console.log(name.indexOf("j"));
console.log(name.length);
console.log(name.trim());
console.log(name.toUpperCase());
console.log(name.toLowerCase());
console.log(name.startsWith("J"));
console.log(name.endsWith("J"));
console.log(name.replaceAll(" ", ""));
console.log(name.padStart(15, "#").length);
console.log(name.padEnd(15, "#"));

//string slicing: creating a substring from a portion of another
// string(string.slice(start, end))
let spaceBegin = name.indexOf(" ", 1);
let spaceEnd = name.indexOf(" ", name.length);
let firstName = name.slice(0, spaceBegin);
let lastName = name.slice(name.indexOf(" ") + 1);
console.log(spaceBegin, spaceEnd);
console.log(firstName);
console.log(lastName);

const email = "jorge_william92@hotmail.com";
let user = email.slice(0, email.indexOf("@"));
let provedor = email.slice(email.indexOf("@"));
console.log(user);
console.log(provedor);
