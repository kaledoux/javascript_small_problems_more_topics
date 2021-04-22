function swapLetter(letter) {
  if (/[A-Z]/.test(letter)) { return letter.toLowerCase() };
  if (/[a-z]/.test(letter)) { return letter.toUpperCase() };
  return letter;
}

function staggeredCase(string) {
  let chars = string.split('');
  let counter = 0;
  return chars.map(char => {
    if (/[a-z]/i.test(char)) {
      counter += 1;
      return counter % 2 === 1 ? char.toUpperCase() : char.toLowerCase();
    } else {
      return char;
    }
  }).join('');
}

console.log(staggeredCase('I Love Launch School!'));        // "I lOvE lAuNcH sChOoL!"
console.log(staggeredCase('ALL CAPS'));                     // "AlL cApS"
console.log(staggeredCase('ignore 77 the 444 numbers'));    // "IgNoRe 77 ThE 444 nUmBeRs"
