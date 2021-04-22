// Goal:
//   - encrypt a string using ascii values and a key number to shift ascii values
// Input:
//   - string and number
//   - can have letters, upper/lower case
//   - digits and other characters as well
//   - empty string? 
//   - 0 <= key <= upper limit?
// Output:
//   - string
//   - letters shifted, other chars untouched
//   - empty string, same empty?
// Rules/Reqs:
//   - uppercase letters shift to uppercase, lower to lower
//     - case preserved
//   - spaces and other chars are not modified
//   - key indicates shift upward with ascii value
//     - if the key is greater than 26, wrap the values (find remainder and shift)
//   - no decryption necessary?
// Test Cases:
// console.log(caesarEncrypt('A', 0));       // "A"
// console.log(caesarEncrypt('A', 3));       // "D"
// console.log(caesarEncrypt('y', 5));       // "d"
// console.log(caesarEncrypt('a', 47));      // "v"
// console.log(caesarEncrypt('ABCDEFGHIJKLMNOPQRSTUVWXYZ', 25));
// // "ZABCDEFGHIJKLMNOPQRSTUVWXY"
// console.log(caesarEncrypt('The quick brown fox jumps over the lazy dog!', 5));
// // "Ymj vznhp gwtbs ktc ozrux tajw ymj qfed itl!"
// console.log(caesarEncrypt('There are, as you can see, many punctuations. Right?; Wrong?', 2));
// // "Vjgtg ctg, cu aqw ecp ugg, ocpa rwpevwcvkqpu. Tkijv?; Ytqpi?"
// console.log(caesarEncrypt('', 2));       // ""
// 
// General Approach:
//   - split the string into an array of chars
//   - iterate through each char and change value if it is a letter
//     subprocess for shifting letter
//   - rejoin array of shifted chars together into a string
// 
// Data Structures:
//   - string arg
//   - array of chars
//   - ascii values as integers for shifting and calculating the key shift
// 
// Algorithm:
//   - set stringChars = string split on ''
//   - set array lowercaseLetters = ['abcdefghijklmnopqrstuvwxyz']
//   - set array uppercaseLetters = ['ABCDEFGHIJKLMONPQRSTUVWXYZ']
//
//   - map stringChars
//     - if char is a lowercase letter (/[a-z]/g
//       - shift char by key with lowercaseLetters
//    - char is uppercase letter (/[A-Z]/g)
//      - shift char by key with uppercaseLetters
//     - else
//       - do nothing
//   - join stringChars with '' and return
//   
//   - getKeyValue(integer)
//     return integer > 26 ? integer % 26 : integer
//   
//
function getKeyValue(integer) {
  return integer > 26 ? integer % 26 : integer;
}

function switchLetter(letter, key, alphabet) {
  let letterIndex = alphabet.indexOf(letter);
  return alphabet[(letterIndex + key) % 26];
}

function  caesarEncrypt(string, key) {
  let stringChars = string.split('');
  let cipher = ''
  let lowercaseLetters = 'abcdefghijklmnopqrstuvwxyz'
  let uppercaseLetters = 'ABCDEFGHIJKLMONPQRSTUVWXYZ'

  stringChars.forEach(char => {
    if (/[a-z]/.test(char)) {
      cipher += switchLetter(char, key, lowercaseLetters);
    } else if (/[A-Z]/.test(char)) {
      cipher += switchLetter(char, key, uppercaseLetters);
    } else {
      cipher += char;
    } 
  });
  return cipher;
}



console.log(caesarEncrypt('A', 0));       // "A"
console.log(caesarEncrypt('A', 3));       // "D"
console.log(caesarEncrypt('y', 5));       // "d"
console.log(caesarEncrypt('a', 47));      // "v"
console.log(caesarEncrypt('ABCDEFGHIJKLMNOPQRSTUVWXYZ', 25));
console.log(caesarEncrypt('The quick brown fox jumps over the lazy dog!', 5));
console.log(caesarEncrypt('There are, as you can see, many punctuations. Right?; Wrong?', 2));
console.log(caesarEncrypt('', 2));       // ""
