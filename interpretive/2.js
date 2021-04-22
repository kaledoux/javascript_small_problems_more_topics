// Input:
//   - integer
//   - >= 0
// Output:
//   - logs to screen
//   - lines of strings
//   - specified numbers of *
// Rules/Req:
//   - the number given will be an odd integer
//   - the output should take the format of an n x n grid 
//     - starting with 1 * centered in the n width row
//     - add two * to the centered * and print row until n is reached
//     - then decrease each rows number of * by 2 until 1 is reached on the final row
// Test Cases:
// console.log(diamond(1));
// console.log(diamond(3));
// console.log(diamond(9));
// 
// General Approach:
//   - given the max width (n)
//   - center one * in an n width row
//     - print
//   - add two *
//     - print
//   ...
//   when max width has been reached, 
//   - reverse the process
// 
// Data Structures:
//   - start with n arg
//   - constant for max width
//   - variable for current row
// 
// Algorithm:
//   - function to create line
//     - given number of char, and number of spaces
//     - set var line = ''
//     - for number of spaces to 0
//       - line += ' '
//     - for 1 to number of char
//       - line += char
//     - for number of spaces to 0
//       - line += ' '
//     - return line
//     
//   - set const MAX_WIDTH = n
//   - set var maxSpaces = MAX_WIDTH - 1 / 2
//   - set var currentSpaces = maxSpaces
//   - set line = ''
//   - loop until current spaces is equal to 0
//     - on each loop 
//     - set line = createLine(MAX_WIDTH - currentSpaces * 2, currentSpaces)
//     - log line
//     - decrement currentSpaces
//   - loop until currentSpaces is equal to maxSpaces
//     - increment currentSpaces
//     - set line = createLine(MAX_WIDTH - currentSpaces, currentSpaces)
//     - log line
//
function createLine(charNum, spaceNum) {
  let line = '';
  for (let i = spaceNum; i > 0; i -= 1) {
    line += ' ';
  }
  for (let i = charNum; i >= 0; i -= 1) {
    line += '*';
  }
  for (let i = spaceNum; i > 0; i -= 1) {
    line += ' ';
  }
  return line;
}

function diamond(num) {
  if (num === 1) { 
    console.log('*')
    return;
  }

  let MAX_WIDTH = num;
  let maxSpaces = num - 1 / 2;
  let currentSpaces = maxSpaces;

  while (currentSpaces > 0) {
    console.log(createLine(MAX_WIDTH - (currentSpaces * 2), currentSpaces));
    currentSpaces -= 1;
  }

  while (currentSpaces < maxSpaces) {
    console.log(createLine(MAX_WIDTH - (currentSpaces * 2), currentSpaces));
    currentSpaces += 1;
  }
}

console.log(diamond(1));
console.log(diamond(3));
console.log(diamond(9));
