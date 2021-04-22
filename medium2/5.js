// Input:
//   - integer
//   - greater than 0
// Output:
//   - integer 
//   - or error if no valid output
// Rules/Req:
//   - featured number
//     - divisible by 7
//     - each digit appears only 1 time  (49 => featured, 98 => not, 133 => not)
//   - find the next highest featured number from argument
//   - throw error if no such featured number exists
// Test Cases:
// console.log(featured(12));           // 21
// console.log(featured(20);           // 21
// console.log(featured(21));           // 35
// console.log(featured(997));          // 1029
// console.log(featured(1029));         // 1043
// console.log(featured(999999));       // 1023547
// console.log(featured(999999987));    // 1023456987
// console.log(featured(9876543201));    // error message
// Data Structures:
//   - given integer
//   - build an array of featured
//   - or use a local to track, stop when the coniditions have been met
// General Approach:
//   - set a local variable to track the current highest featured
//   - continue to find the highest featured until either
//     - there is a feature value higher than the arg
//     - we surpass 9876543210
// Algorithm:
//   - set HIGHEST_VALUE = 9876543210
//   - set featured = arg
//   - for loop until greater than HIGHEST_VALUE
//     - if current number is divisible by 7 && has no repeating digits *subprocess*
//       - set featured to value
//     -if featured > arg; return featured
//   - throw error "no featured value exists"
//   
//   - no repeating digits
//     - given an integer
//     - convert to string
//       - for each letter
//         - if the index of the current digit is not equal to the last index of the current digit
//           - return false
//     - return true
  
function noRepeatingDigits(number) {
  let digits = String(number);
  for (let i = 0; i < digits.length; i += 1) {
    if (i !== digits.lastIndexOf(digits[i])) { return false };
  }
  return true;
}

function featured(number) {
  const HIGHEST_VALUE = 9876543210;
  let featured = number;
  for (let i = featured; i <= HIGHEST_VALUE; i += 1) {
    if (i % 7 === 0 && i % 2 === 1 && noRepeatingDigits(i)) {
      featured = i;
    }
    if (featured > number) { return featured };
  }
  throw new Error('No such Value Exists!');
}

console.log(featured(12));           // 21
console.log(featured(20));           // 21
console.log(featured(21));           // 35
console.log(featured(997));          // 1029
console.log(featured(1029));         // 1043
console.log(featured(999999));       // 1023547
console.log(featured(999999987));    // 1023456987
console.log(featured(9876543201));    // error message
