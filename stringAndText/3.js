function letterCaseCount(string) {
  let upperCaseCount = string.replace(/[^A-Z]/g, '').length;
  let lowerCaseCount = string.replace(/[^a-z]/g, '').length;
  let otherCharsCount = string.replace(/[a-z]/gi, '').length;

  return {
    lowercase: lowerCaseCount,
    uppercase: upperCaseCount,
    neither: otherCharsCount,
  };
}

console.log(letterCaseCount('abCdef 123'));  // { lowercase: 5, uppercase: 1, neither: 4 }
console.log(letterCaseCount('AbCd +Ef'));    // { lowercase: 3, uppercase: 3, neither: 2 }
console.log(letterCaseCount('123'));         // { lowercase: 0, uppercase: 0, neither: 3 }
console.log(letterCaseCount(''));            // { lowercase: 0, uppercase: 0, neither: 0 }
