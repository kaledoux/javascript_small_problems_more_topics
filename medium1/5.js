// Input: 
//   - string
//   - multiple words separated by spaces
//   - punctuation included
//   - will spacing always be included between number words?
//   * other types of input? arrays? no args? 
// Output:
//   - string
//   - number words substituted with equivalent number strings ('five' => '5')
//   - output/return on invalid args?
// Rules/Reqs:
//   - parse string argument
//     - convert number words to their number string equivalents
//     - number string - the digits 0-9 in word form ('one', 'two', 'three', 'four'...)
//   - punctuation positioning needs to remain intact
//     ( 'four. ' => '4. ')
// Test Cases:
// console.log(wordToDigit('Please call me at five five five one two three four. Thanks.'));
// console.log(wordToDigit('Number zero one two three four five six seven eight nine.'));
// console.log(wordToDigit(''));
// console.log(wordToDigit('Please call me at 123456789. Thanks.'));
// 
// Data Structures:
//   - starting with a string
//   - split into array of strings
//   - map replacement and join?
//   or
//   - create object with number words and the number digits
//   - replace words in string
// 
// General Approach:
//   - create an object that holds the number words and corresponding digits
//   - copy the string arg
//   - iterate through each key (number word)
//   - replace instances of that key with the value in the string 
//   - return the swapped string
// 
// Algorithm:
//   - create object numberWords {zero: '0', one: '1', ..}
//   - set local var numberSwapped = arg
//   - for each key in numberWords
//     - replace the instance of key in numberSwapped with numberWords[key] (associated value)
//     - reassignment!
//   return numberSwapped

function wordToDigit(toSwap) {
  let numberWords = { 
    zero: '0',
    one: '1',
    two: '2',
    three: '3',
    four: '4',
    five: '5',
    six: '6',
    seven: '7',
    eight: '8',
    nine: '9',
  }

  let numberSwapped = toSwap;
  Object.keys(numberWords).forEach(word => {
    numberSwapped = numberSwapped.replace(RegExp(word, 'g'), numberWords[word])
  });

  return numberSwapped;
}

console.log(wordToDigit('Please call me at five five five one two three four. Thanks.'));
console.log(wordToDigit('Number zero one two three four five six seven eight nine.'));
console.log(wordToDigit(''));
console.log(wordToDigit('Please call me at 123456789. Thanks.'));
