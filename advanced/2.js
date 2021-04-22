// goal:
//   - transpose a 3 x 3 array of values
// Input:
//   - matrix - array of 3 arrays
//   - can have any type of value within?
//   - if not supplied with enough values in matrix?
// Output:
//   - newMatrix - transposed array
//   - new array object, original untouched
// Rules/Req:
//   - transpose process 
//     - elements in index 0 of subArray1, 2, 3 become newMatrix subArray1 [0, 1, 2]
//     - elements in index 1 of subArray1, 2, 3 become newMatrix subArray2 [0, 1, 2]
//     - elements in index 2 of subArray1, 2, 3 become newMatrix subArray3 [0, 1, 2]
//   - new array is created and matrix is not mutated
//   
// Test Cases:
// const matrix = [
//   [1, 5, 8],
//   [4, 7, 2],
//   [3, 9, 6]
// ];
// 
// const newMatrix = transpose(matrix);
// 
// console.log(newMatrix);      // [[1, 4, 3], [5, 7, 9], [8, 2, 6]]
// console.log(matrix);         // [[1, 5, 8], [4, 7, 2], [3, 9, 6]]
// 
// const matrix = [
//   ['1', '5', '8'],
//   ['4', '7', '2'],
//   ['3', '9', '6']
// ];
// 
// const newMatrix = transpose(matrix);
// 
// console.log(newMatrix);      // [[1, 4, 3], [5, 7, 9], [8, 2, 6]]
// console.log(matrix);         // [[1, 5, 8], [4, 7, 2], [3, 9, 6]]
//     
// Data Structures:
//   - given matrix
//   - newMatrix
//   - variable to hold currentRow []
//   
// General Approach:
//   - initialize the newMatrix as []
//   - create the variable currentRow as []
//   - loop through matrix three times
//     - on each pass, grab the value at the corresponding index in each subArray
//       - add that value to the current row
//     - add the currentRow to the newMatrix
// 
// Algorithm:
//   - set newMatrix to []
//   - for 0 to 2
//     - set currentRow to []
//     - for 0 to 2
//       - push matrix[i][ind] to currentRow
//     - push currentRow to newMatrix
// 
//   - return newMatrix;

function transpose(matrix) {
  let newMatrix = [];
  for (let i = 0; i < matrix.length; i += 1) {
    let currentRow = [];
    for (let ind = 0; ind < matrix[i].length; ind += 1) {
      currentRow.push(matrix[ind][i]);  
    }
    newMatrix.push(currentRow);
  }

  return newMatrix;
}

// const matrix = [
//   [1, 5, 8],
//   [4, 7, 2],
//   [3, 9, 6]
// ];
// 
// const newMatrix = transpose(matrix);
// 
// console.log(newMatrix);      // [[1, 4, 3], [5, 7, 9], [8, 2, 6]]
// console.log(matrix);         // [[1, 5, 8], [4, 7, 2], [3, 9, 6]]

const matrix = [
  ['1', '5', '8'],
  ['4', '7', '2'],
  ['3', '9', '6']
];

const newMatrix = transpose(matrix);

console.log(newMatrix);      // [[1, 4, 3], [5, 7, 9], [8, 2, 6]]
console.log(matrix);         // [[1, 5, 8], [4, 7, 2], [3, 9, 6]]
