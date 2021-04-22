// Input:
//   - one argument, number
//   - positive integer *
//   - can be one digit in length, up to many digits
// Output:
//   - new number
//   - rotated digits
//   - leading 0s are dropped from output
//   - invalid args?
// Rules/Reqs:
//   - number need to have maximum rotation performed
//     - starting with whole number, take first digit and shift to last position
//     - keep left most digit in place, rotate remaining digits
//     - add one place value from left to right on each iteration, rotating remaining
//     - stop when only two right most digits have been rotated
//   - if single digit passed in, return same digit
//   - remove any leading 0s from rotated number
// Test Cases:
// console.log(maxRotation(735291));          // 321579
// console.log(maxRotation(3));               // 3
// console.log(maxRotation(35));              // 53
// console.log(maxRotation(105));             // 15 -- the leading zero gets dropped
// console.log(maxRotation(8703529146));      // 7321609845
// * empty input, or invalid types?
// Data Structures:
//   - start with number
//   - provided function takes a number arg and returns a number
//   - create a variable to hold the number
//   - return that variable
// General Approach:
//   - create a variable to hold a copy of the arg
//   - loop through with variable
//     - each loop will reassign variable to rotated value
//     - each loop will perform a lesser and lesser rotation
//   - return the variable
// Algorithm:
//   - set local variable size = String(unrotated).length;
//   - if size is less than 2, return unrotated
//   - initialize rotated = arg (unrotated)
//   - loop for number of times unrotated length - 1
//     - reassign rotated to rotateRightmostDigits(rotated, n)
//     // this should slice from 0 - end, 1 - end, 2 -end. etc
//   -return rotated

function rotateRightmostDigits(number, n) {
  let digits = String(number).split('');

  let firstHalf = digits.slice(0, -n);
  let secondHalf = digits.slice(-n);

  secondHalf.push(secondHalf.shift());

  return Number(firstHalf.concat(secondHalf).join(''));
}

function maxRotation(unrotated) {
  let size = String(unrotated).length;
  if (size < 1) { return unrotated };

  let rotated = unrotated;

  for (let i = size; i >= 1 ; i -= 1) {
    rotated = rotateRightmostDigits(rotated, i);
  }

  return rotated;
}

console.log(maxRotation(735291));          // 321579
console.log(maxRotation(3));               // 3
console.log(maxRotation(35));              // 53
console.log(maxRotation(105));             // 15 -- the leading zero gets dropped
console.log(maxRotation(8703529146));      // 7321609845
