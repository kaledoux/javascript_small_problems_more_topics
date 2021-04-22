// Input:
//   - one number
//   - positive integer
// Output:
//   - one number
//   - nth fibonacci number
// Rules/Reqs:
//   - use memoization
//   - memoization - saving a computed answer for reuse
// Test Cases:
// console.log(fibonacci(20));       // 6765
// console.log(fibonacci(50));       // 12586269025
// console.log(fibonacci(75));       // 2111485077978050
// Data Structures:
//   - object to hold fib numbers
//   - function uses number arg, but references object for lookup
// Algorithm:
//   - create object fibNumbers {}
//   - if n is 2 or less
//     - return 1
//   - else lookup fibNumbers[n] 
//     - if there is an entry, return it
//     - if no entry, set it equal to fib(n -1) fib(n - 2)
//   - return fibNumbers[n]

const fibNumbers = {};

function fibonacci(n) {
  if (n === 1 || n === 2) {
    return 1;
  }
  if (fibNumbers[n]) {
    return fibNumbers[n];
  } else {
    fibNumbers[n] = fibonacci(n - 1) + fibonacci(n - 2);
  }

  return fibNumbers[n];
}
console.log(fibonacci(20));       // 6765
console.log(fibonacci(50));       // 12586269025
console.log(fibonacci(75));       // 2111485077978050
