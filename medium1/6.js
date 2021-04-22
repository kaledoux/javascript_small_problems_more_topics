// Input: 
//   - one number
//   - positive integer
// Output:
//   - number
//   - nth fibonacci number
// Rules/Req:
//   - find the nth fibonacci number
//     - (n-1) + (n-2)
//   - uses recursion
//     - must call itself within function
// Test Cases:
// console.log(fibonacci(1));       // 1
// console.log(fibonacci(2));       // 1
// console.log(fibonacci(3));       // 2
// console.log(fibonacci(4));       // 3
// console.log(fibonacci(5));       // 5
// console.log(fibonacci(12));      // 144
// console.log(fibonacci(20));      // 6765
// Data Structures:
//   - start with number value
//   - use local vars as numbers to perform addition
//   - return number
// Algorithm:
//   - if n is 1 || 2
//     - return 1
//   - else
//     - return fib(n-1) + fib(n-2)

function fibonacci(n) { 
  if (n === 1 || n === 2) {
    return 1;
  } else {
    return fibonacci(n - 1) + fibonacci(n - 2);
  }
}

console.log(fibonacci(1));       // 1
console.log(fibonacci(2));       // 1
console.log(fibonacci(3));       // 2
console.log(fibonacci(4));       // 3
console.log(fibonacci(5));       // 5
console.log(fibonacci(12));      // 144
console.log(fibonacci(20));      // 6765
