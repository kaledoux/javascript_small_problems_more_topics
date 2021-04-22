// Input: 
//   - one number
// Output:
//   - one number
//   - nth fib number
// Rules/Req:
//   - must calculate nth fibonacci number
//   - cannot use recursion 
// TestCases:
// console.log(fibonacci(20));       // 6765
// console.log(fibonacci(50));       // 12586269025
// console.log(fibonacci(75));       // 2111485077978050
// Data Structures:
//   create object to hold number and fib value pairs
//   loop a lookup to return final value
// Algorithm:
//   - set object fibs to { '1': 1, '2': 1,}
//   - for i from 3 until n
//     - if fibs[currentNumber] = undefined
//     - set fibs[currentNumber] to fibs[currentNumber -1] + fibs[currentNumber - 2]
//   - return fibs[n]
function fibonacci(n) {
  let fibs = { 1: 1, 2: 1 };
  for (let i = 3; i <= n; i += 1) {
    fibs[i] = fibs[i -1] + fibs[i - 2];
  }
  return fibs[n];
}

console.log(fibonacci(20));       // 6765
console.log(fibonacci(50));       // 12586269025
console.log(fibonacci(75));       // 2111485077978050
