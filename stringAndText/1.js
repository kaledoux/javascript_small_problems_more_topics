function isUppercase(string) {
  let chars = string.replace(/[^A-Za-z]/g, '').split('');
  for (let i = 0; i < chars.length; i += 1) {
    if (/[a-z]/.test(chars[i])) { return false };
  }
  return true;
}

console.log(isUppercase('t'));               // false
console.log(isUppercase('T'));               // true
console.log(isUppercase('Four Score'));      // false
console.log(isUppercase('FOUR SCORE'));      // true
console.log(isUppercase('4SCORE!'));         // true
console.log(isUppercase(''));                // true
