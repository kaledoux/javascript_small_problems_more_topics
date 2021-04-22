// Input:
//   - integer
//   - greater than 0
//   * upper limit?
//   * invalid types? no
// Output: 
//   - integer
// Rules/Req:
//   - find the sums of squares of n positive integers   
//   - find the square of sum of n positive integer
//     - return the difference of both
//   - no negatives
// Test Cases:
// console.log(sumSquareDifference(3));      // 22 --> (1 + 2 + 3)**2 - (1**2 + 2**2 + 3**2)
// console.log(sumSquareDifference(10));     // 2640
// console.log(sumSquareDifference(1));      // 0
// console.log(sumSquareDifference(100));    // 25164150
// console.log(sumSquareDifference(0));      // 0
// Data Structures:
//   - given integer
//   - construct array of n integers ( up to n)
//   - two local variables from reduction
//     - sum** 2 and the squares
// Algorithm:
//   - if n = 0 or 1, return 0
//   - set local variable numbers = []
//   - for 1 to n
//     - push number to numbers
//   set local variable squares = numbers reduced with squared current values
//   - set local variable sumsSquared = numbers reduced with addition, then squared
//   - return difference between squares and sumsSquared
function sumSquareDifference(number) {
  if (number < 2) { return 0 };
  let numbers = [];
  for (let i = 1; i <= number; i += 1) { 
    numbers.push(i);
  }

  let squares = numbers.reduce((accu, curr) => accu + (curr ** 2));
  let sumsSquared = numbers.reduce((accu, curr) => accu + curr) ** 2;

  return sumsSquared - squares; 
}
console.log(sumSquareDifference(3));      // 22 --> (1 + 2 + 3)**2 - (1**2 + 2**2 + 3**2)
console.log(sumSquareDifference(10));     // 2640
console.log(sumSquareDifference(1));      // 0
console.log(sumSquareDifference(100));    // 25164150
console.log(sumSquareDifference(0));      // 0
