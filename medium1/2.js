// Write a function that rotates the last n digits of a number. For the rotation, rotate by one digit to the left, moving the first digit to the end.

// console.log(rotateRightmostDigits(735291, 1));      // 735291
// console.log(rotateRightmostDigits(735291, 2));      // 735219
// console.log(rotateRightmostDigits(735291, 3));      // 735912
// console.log(rotateRightmostDigits(735291, 4));      // 732915
// console.log(rotateRightmostDigits(735291, 5));      // 752913
// console.log(rotateRightmostDigits(735291, 6));      // 352917
// 
// Input:
//   - two numbers
//   - number to be rotated
//   - n - number of digits to be rotated
//   * numbers passed in will be positive integers
//   * can n be greater than the total number of digits in number?
// 
// Output:
//   - number with last n digits rotated
// 
// Requirements/Rules:
//   - rotation =
//     - first digit in slice becomes the last digit
//     - all other digits shift over one position
//       ( 765 => 657 )
//   - only the last n digits of the number are rotated
//     - if n === the total number of digits, the whole number is rotated
//   * what to do if an invalid number/arg is passed? return undefined?
//   * assign a default n value?
// Test Cases:
// // console.log(rotateRightmostDigits(735291, 1));      // 735291
// // console.log(rotateRightmostDigits(735291, 2));      // 735219
// // console.log(rotateRightmostDigits(735291, 3));      // 735912
// // console.log(rotateRightmostDigits(735291, 4));      // 732915
// // console.log(rotateRightmostDigits(735291, 5));      // 752913
// // console.log(rotateRightmostDigits(735291, 6));      // 352917
// 
// Data Structures:
//   - starting with two integers/numbers
//   - convert the number to an array for easy operation
//   - use array to slice and rotate 
//   - collapse back to string and convert to number for return
// 
// General Approach:
//   - check number validity?
//   - convert number to string and then split into array
//   - slice and rotate n values
//   - rejoin and convert to number for return
// 
// Algorithm:
//   - initialize new array object digits to String(number).split('')
//   - initialize variable firstHalf = grab slice of array up to rotation point (0, -n)
//   - initialize variable secondHalf = grab slice of array from -n to end
//     - shift and push
//   - return concatenation of first and second half
function rotateRightmostDigits(number, n) {
  let digits = String(number).split('');

  let firstHalf = digits.slice(0, -n);
  let secondHalf = digits.slice(-n);

  secondHalf.push(secondHalf.shift());

  return Number(firstHalf.concat(secondHalf).join(''));
}

console.log(rotateRightmostDigits(735291, 1));      // 735291
console.log(rotateRightmostDigits(735291, 2));      // 735219
console.log(rotateRightmostDigits(735291, 3));      // 735912
console.log(rotateRightmostDigits(735291, 4));      // 732915
console.log(rotateRightmostDigits(735291, 5));      // 752913
console.log(rotateRightmostDigits(735291, 6));      // 352917
