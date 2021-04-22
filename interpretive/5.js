// goal:
//   - encrypt a string using the vigenere cipher
// input:
//   - plaintext - string that can included any type of char
//   - keyword - string that is comprised of any letters (upper and lower case)
// output:
//   - ciphered string - each letter shifted according to keyword letter 
//   - invalid args?
// Rules/Reqs:
//   - keyword 
//     - each letter corresponds to a specific number of alphabetic shifts
//     - the number of shifts corresponds to the index position of the letter
//       'a' = 0, 'b' = 1, 'c' = 2, .. 'z' = 25
//       'A' = 0, ..                   'Z' = 25
//   - each letter in the string is shifted according to the letter of the keyword that it 
//     lines up with when only the letters are considered  
//   - if the number of letters in the string is not evenly divisible by the number of letters in
//     the keyword, should we iterate through the keyword chars until the string is complete?
//   - spacing and punctuation are preserved in ciphered string
//   - case is preserved in ciphered string *separate ciphering for up and down cases*
// Test Cases:
// console.log(vigenere("Pineapples don't go on pizzas!", 'A' )) //"Pineapples don't go on pizzas!"
// console.log(vigenere("Pineapples don't go on pizzas!", 'Aa' )) //"Pineapples don't go on pizzas!"
// console.log(vigenere("Pineapples don't go on pizzas!", 'cab' )) //"Riogaqrlfu dpp't hq oo riabat!"
// console.log(vigenere("Dog", 'Rabbit' )) //"Uoh"
// console.log(vigenere("", 'A' )) //""
// Data Structures:
//   - given string for ciphering and a string keyword
//   - strings to hold upper and lower case alphabets
//   - new string to build cipher
//   - use number to track the letter shift for each char
//   - use counter to track index for keywords current position
// General Approach:
//   - find the appropriate number to shift based on a letter in keyword
//     * subprocess *
//   - shift a letter based on a given shift key value
//     * subprocess *
//   - iterate through each char in plaintext
//     - if the char is a letter
//     - shift the letter according the the current letter in the keyword
//     - add that shifted char to an output string
//     - move the index of the current letter in keyword
//       *subprocess*
//     - if not a letter
//       - add unmodified char to output string
// Algorithm:
//   - function findShift(currentLetter) 
//     - set local variables for lower and upper alphas
//       - if letter is lowercase, 
//         - return the index of currentLetter in lowerLetters
//       - if letter is uppercase, 
//         - return the index of currentLetter in uppercaserLetters
// 
//   - function shiftLetter(letter, shiftValue, alphabet)
//     - set the letterValue to index of alphabet at the letter
//     - return the char at alphabet[lettervalue + shiftValue % 26]
//     * need to track case and pass correct alphabet in
// 
//   - function incrementKeyword(index, keyword) 
//     - let newIndex = index + 1
//     - if newIndex is >= keyword
//     - set newIndex to 0
//     - return newIndex
// 
//   - function vigenere(plaintext, keyword)
//     - set local variable cipher to ''
//     - set constants lowercaseLetters = 'abcdefghijklmnopqrstuvwxyz'
//     - set constant uppercaseLetters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ' 
//     - set keywordIndex to 0  
// 
//     - for each char in plaintext
//       - if char is a letter
//         - set shift to findShift(keyword[keywordIndex]
//         - if letter is lowercase
//           - add return of shiftLetter(char, shift, lowercaseLetters)
//         - if letter is uppercase
//           - add return of shiftLetter(char, shift, uppercaseLetters)
//         - set keywordIndex to incrementKeyword(keywordIndex, keyword)
//       - else
//         - add char to cipher
//     - return cipher

function findShift(currentLetter) {
  const lowercaseLetters = 'abcdefghijklmnopqrstuvwxyz'
  const uppercaseLetters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ' 
  if (/[a-z]/.test(currentLetter)) {
    return lowercaseLetters.indexOf(currentLetter);
  } else {
    return uppercaseLetters.indexOf(currentLetter);
  }
}

function shiftLetter(letter, shiftValue, alphabet) {
  let letterValue = alphabet.indexOf(letter);
  return alphabet[(letterValue + shiftValue) % 26]
}

function incrementKeyword(index, keyword) {
  let newIndex = index + 1;
  if (newIndex >= keyword.length) {
    newIndex = 0;
  }
  return newIndex;
}

function vigenere(plaintext, keyword) {
  const lowercaseLetters = 'abcdefghijklmnopqrstuvwxyz'
  const uppercaseLetters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ' 
  let cipher = '';
  let keywordIndex = 0;

 plaintext.split('').forEach(char => {
   if (/[a-z]/gi.test(char)) {
     let shift = findShift(keyword[keywordIndex]);
       if (/[a-z]/.test(char)) {
         cipher += shiftLetter(char, shift, lowercaseLetters);
       } else {
         cipher += shiftLetter(char, shift, uppercaseLetters);
       }
     keywordIndex = incrementKeyword(keywordIndex, keyword);
   } else {
    cipher += char;
   }
 });

  return cipher;
}

console.log(vigenere("Pineapples don't go on pizzas!", 'A' )) //"Pineapples don't go on pizzas!"
console.log(vigenere("Pineapples don't go on pizzas!", 'Aa' )) //"Pineapples don't go on pizzas!"
console.log(vigenere("Pineapples don't go on pizzas!", 'cab' )) //"Riogaqrlfu dpp't hq oo riabat!"
console.log(vigenere("Dog", 'Rabbit' )) //"Uoh"
console.log(vigenere("", 'A' )) //""
