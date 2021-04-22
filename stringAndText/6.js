function swapLetter(letter) {
  if (/[A-Z]/.test(letter)) { return letter.toLowerCase() };
  if (/[a-z]/.test(letter)) { return letter.toUpperCase() };
  return letter;
}

function staggeredCase(string) {
  let chars = string.split('');
  let staggered = '';
  for (let i = 0; i < chars.length; i += 1) {
    if (i % 2 === 0) {
      staggered += chars[i].toUpperCase();
    } else {
      staggered += chars[i].toLowerCase();
    }
  }
  return staggered;
}

console.log(staggeredCase('I Love Launch School!'));        // "I LoVe lAuNcH ScHoOl!"
console.log(staggeredCase('ALL_CAPS'));                     // "AlL_CaPs"
console.log(staggeredCase('ignore 77 the 4444 numbers'));   // "IgNoRe 77 ThE 4444 nUmBeRs"
