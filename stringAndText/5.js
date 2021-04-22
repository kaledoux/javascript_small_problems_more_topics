function swapLetter(letter) {
  if (/[A-Z]/.test(letter)) { return letter.toLowerCase() };
  if (/[a-z]/.test(letter)) { return letter.toUpperCase() };
  return letter;
}

function swapCase(string) {
  return string.split('').map(char => swapLetter(char)).join('');
}

console.log(swapCase('CamelCase'));              // "cAMELcASE"
console.log(swapCase('Tonight on XYZ-TV'));      // "tONIGHT ON xyz-tv"
