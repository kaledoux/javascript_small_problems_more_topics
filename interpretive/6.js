// goal:
//   - display an 8 pointed star in the console in an n x n grid
// Input:
//   - n - odd integer
//   - n >= 7
//   * do we need to handle a smaller integer? What is the max size?
// Output:
//   - n different strings (to console)
//   - consists of * and/or ' '
// Rules/Req:
//   - given an integer n, print out n rows of stars
//   - the middle row will have n stars and 0 spaces
//   - each row out from the middle will have 3 stars with n - 3 spaces
//     Visual for n = 7:
//     *--*--*
//     -*-*-*-
//     --***--
//     *******
//     --***--
//     -*-*-*-
//     *--*--*
//   - outside spaces and inside spaces 
//     - outside spaces start at 0 and increase by 1, inside starts at full value and decreases by 1
// Test Cases:
// console.log(star(7));
// console.log(star(9));
// console.log(star(11));
// Data Structures:
//   - given integer
//   - values to hold outerSpaces and innerSpaces
//   - set a width value
//   
// General Approach
//   - calculate the starting number of spaces 
//   - use the starting spaces to assign the initial values of variable to track inner and outer spaces
//   - set a value for the middle row (n/width)
//   - loop until the value of inner spaces is 0
//     - log outer star inner start inner star outer 
//     - increment the outer spaces variable and decrement the innerSpaces variable
//   - log the middle row n x *
//   - loop until the outer spaces variable is 0
//     - log outer star inner start inner star outer 
//     - increment the inner spaces variable and decrement the outerSpaces variable
//   - printing i * char?
//     
// Algorithm:
//   set startingSpaces to n - 3
//   set outer to 0
//   set inner to startingSpaces / 2
//   
//  while (inner is greater than 0) 
//     - log `${' '.repeat(outer)}*${' '.repeat(inner)}*${' '.repeat(inner)}*${' '.repeat(outer)}`
//     increment outer
//     decrement inner
// 
//   log `${'*'.repeat(n)}`
// 
// set outer to starting spaces / 2
// set inner to 0
//
//  while (outer is greater than 0) 
//     - log `${' '.repeat(outer)}*${' '.repeat(inner)}*${' '.repeat(inner)}*${' '.repeat(outer)}`
//     increment inner
//     decrement outer

function star(n) {
  let startingSpaces = (n - 3) / 2;
  let outer = 0;
  let inner = startingSpaces;

  while (inner >= 0) {
    console.log(`${' '.repeat(outer)}*${' '.repeat(inner)}*${' '.repeat(inner)}*${' '.repeat(outer)}`)
    outer += 1;
    inner -= 1;
  }

  console.log(`${'*'.repeat(n)}`);

  outer = startingSpaces;
  inner = 0;

  while (outer >= 0) {
    console.log(`${' '.repeat(outer)}*${' '.repeat(inner)}*${' '.repeat(inner)}*${' '.repeat(outer)}`)
    outer -= 1;
    inner += 1;
  }
}

console.log(star(7));
console.log(star(9));
console.log(star(11));
