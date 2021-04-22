// Goal:
//   - determine whether a given word can be spelled using the given letter blocks only once per block
// Input:
//   - string, undetermined length, either up or downcase
//   - other chars? digits?
//   - empty strings possible?
//   * invalid data types?
// Output:
//   - boolean
// Rules/Reqs:
//   - letter block:
//     - data structure that contains two letters
//     - letters are a 13 point upshift in ascii
//   - given the valid letter blocks, determine if a word can be spelled from such blocks
//     - each block can only be used once
//     - if one letter of a block is used, the other letter cannot be used!
//   * empty string would return? true?
//   - case insensitive comparison
// Test Cases:
// console.log(isBlockWord('BATCH'));      // true
// console.log(isBlockWord('BUTCH'));      // false
// console.log(isBlockWord('jest'));       // true
// console.log(isBlockWord(''));       // true
// console.log(isBlockWord('jEsT'));       // true
// console.log(isBlockWord('ButCh'));       // true
// General Approach:
//   - build object with boolean for seen? value
//     - key can be a string with both letters
//     - value is boolean
//   - shift string either up or downcase
//   - check each letter
//     - for each letter check the keys of the letter block object
//     - if a key includes the letter, change the flag to true
//     - if the value for a key is already true , the block has been used already!
// Algorithm:
//   - set local variable letterBlocks to { AN: false, BO: false, etc. }
//   - shift string to upcase
//   - for each letter in string
//     - for each key in letterBlocks  
//       - if the index of the letter inside key, is not -1 (it appears in the key)
//         - if the value for that key is false
//           - set to true
//           - break loop
//         - if the value for the key is true
//           - return false!
//     
//   - if the iterations don't return false explicitly, the word is valid, return true

function isBlockWord(string) {
  const letterBlocks = {
    AN: false,
    BO: false,
    CP: false,
    DQ: false,
    ER: false,
    FS: false,
    GT: false,
    HU: false,
    IV: false,
    JW: false,
    KX: false,
    LY: false,
    MZ: false
  }

  let keys = Object.keys(letterBlocks);
  let upcaseString = string.toUpperCase()

  for (let i = 0; i < upcaseString.length; i += 1) {
    let letter = upcaseString[i];

    for (let ind = 0; ind < keys.length; ind += 1) {
      if (keys[ind].indexOf(letter) !== -1) {
        if (letterBlocks[keys[ind]] === true) {
          return false;
        } else {
          letterBlocks[keys[ind]] = true;
        }
      }
    }
  }
  return true;
}

console.log(isBlockWord('BATCH'));      // true
console.log(isBlockWord('BUTCH'));      // false
console.log(isBlockWord('jest'));       // true
console.log(isBlockWord(''));       // true
console.log(isBlockWord('jEsT'));       // true
console.log(isBlockWord('ButCh'));       // false
