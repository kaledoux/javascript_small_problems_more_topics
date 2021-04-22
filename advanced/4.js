// Goal:
//   - rotate a matrix of arbitrary size, 90 degrees to the right
// Input:
//   - matrix - array of arrays where n = number of subArrays and m = elements in each sub
//     - each sub array will have the same number of elements
//     * min / max size of n and m?
//   - if given invalid data types?
//   - empty matrix?
//   - array contents can be any type of value?
// Output:
//   - newMatrix - a new object with subArrays rotated 90
//   
// Rules/Req:
//   - return value must be a new object; no mutation of original array
//   - rotation - 
//     - the values at index[0] of each subArray become the first row of newMatrix
//       - the values are added in reverse order
//       (matrix[2][0], matrix[1][0], matrix[0][0])
//     - the values at index[1] of each subArray become the second row of newMatrix
//     - the values at index[2] of each subArray become the third row of newMatrix
//     - etc..
// Test Cases:
// const matrix1 = [
//   [1, 5, 8],
//   [4, 7, 2],
//   [3, 9, 6],
// ];
// 
// const matrix2 = [
//   [3, 7, 4, 2],
//   [5, 1, 0, 8],
// ];
// 
// const matrix3 = [
//   ['a', 'b', 'c'],
//   ['d', 'e', 'f'],
// ];
// 
// const newMatrix1 = rotate90(matrix1);
// const newMatrix2 = rotate90(matrix2);
// const newMatrix3 = rotate90(rotate90(rotate90(rotate90(matrix2))));
// const newMatrix4 = rotate90(matrix3);
// 
// 
// console.log(newMatrix1);      // [[3, 4, 1], [9, 7, 5], [6, 2, 8]]
// console.log(newMatrix2);      // [[5, 3], [1, 7], [0, 4], [8, 2]]
// console.log(newMatrix3);      // `matrix2` --> [[3, 7, 4, 2], [5, 1, 0, 8]]
// console.log(newMatrix4);      // [['d', 'a'], ['e', 'b'],['c', 'f']]
// 
// Data Structures:
//   - start with matrix (array of arrays)
//   - create newMatrix (array)
//   - currentRow [] to track additions to newMatrix
// 
// General Approach:
//   - calculate the limit of iterations for the number of columns (number of elements in subArrays)
//   - "" for the number of rows (the number of subArrays)
//   - create the newMatrix 
//   - for each column
//     - create variable to hold currentRow contents
//     - for each row from bottom most to top (row limit)
//       - add each value to the currentRow
//     - add the currentRow to the newMatrix
//   - newMatrix should be built with the rotated values
// 
// Algorithm:
//   - set newMatrix = []
//   - set columnLimit = matrix[0] length - 1 (number of items in each subArray)
//   - set rowLimit = matrix length - 1 (the number of subArrays)
// 
//   - for each column in ascending index order (0 to columnLimit)
//     - set currentRow = []
//     - for each row in descending index order (rowLimit to 0)
//       - push value at matrix[row][column] to currentRow
//     - push currentRow to newMatrix
// 
//   - return newMatrix

function rotate90(matrix) {
  let newMatrix = []
  let columnLimit = matrix[0].length - 1
  let rowLimit = matrix.length - 1

  for (let column = 0; column <= columnLimit; column += 1) {
    let currentRow = [];
    for (let row = rowLimit; row >= 0; row -= 1) {
      currentRow.push(matrix[row][column]);
    }
    newMatrix.push(currentRow);
  }

  return newMatrix;
}

const matrix1 = [
  [1, 5, 8],
  [4, 7, 2],
  [3, 9, 6],
];

const matrix2 = [
  [3, 7, 4, 2],
  [5, 1, 0, 8],
];

const matrix3 = [
  ['a', 'b', 'c'],
  ['d', 'e', 'f'],
];

const newMatrix1 = rotate90(matrix1);
const newMatrix2 = rotate90(matrix2);
const newMatrix3 = rotate90(rotate90(rotate90(rotate90(matrix2))));
const newMatrix4 = rotate90(matrix3);


console.log(newMatrix1);      // [[3, 4, 1], [9, 7, 5], [6, 2, 8]]
console.log(newMatrix2);      // [[5, 3], [1, 7], [0, 4], [8, 2]]
console.log(newMatrix3);      // `matrix2` --> [[3, 7, 4, 2], [5, 1, 0, 8]]
console.log(newMatrix4);      // [['d', 'a'], ['e', 'b'],['c', 'f']]
