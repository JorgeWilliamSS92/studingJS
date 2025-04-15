export function form(length, allowedChars) {
  let password = "";
  for (let i = 0; i < length; i++) {
    let randomN = Math.floor(Math.random() * allowedChars.length);
    password += allowedChars[randomN];
  }
  return password;
}
