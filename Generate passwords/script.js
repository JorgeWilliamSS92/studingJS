import { form } from "./script2.js";

const passwordLength = 8;
const upperCase = true;
const lowerCase = true;
const hasNumber = true;
const hasSpecialChar = true;

function generatePassword(
  length,
  upperCase,
  lowerCase,
  hasNumber,
  hasSpecialChar
) {
  let allowedChars = "";

  const upper = "ABCDEFGHIJKLMNOPQRSTUVXYZ";
  const lower = "abcdefghijklmnopqrstuvxyz";
  const number = "0123456789";
  const specialChar = "*-+!?@#&%";

  allowedChars += upperCase ? upper : "";
  allowedChars += lowerCase ? lower : "";
  allowedChars += hasNumber ? number : "";
  allowedChars += hasSpecialChar ? specialChar : "";

  if (length <= 0) {
    return window.alert("Need to have at least 1 caracter.");
  }

  return form(length, allowedChars);
}

const password = generatePassword(
  passwordLength,
  upperCase,
  lowerCase,
  hasNumber,
  hasSpecialChar
);

console.log(password);
