// Goal:
//   - transpose any sized matrix, provided it has at least one row and one column
// Input:
//   - matrix - array with at least 1 subarray
//   - subArrays can have one or more values
// Output:
//   - newMatrix - original matrix transposed
// Rules/Req:
//   - transpose - 
//     - the values in the 0 index of subArray1,2,3 etc become the first row of newMatrix
//     - if there is only one row, each value becomes the first of a new column
//     - if there is only one column, the first value of each column becomes one row
// Test Cases:
// transpose([[1, 2, 3, 4]]);            // [[1], [2], [3], [4]]
// transpose([[1], [2], [3], [4]]);      // [[1, 2, 3, 4]]
// transpose([[1]]);                     // [[1]]
// 
// transpose([[1, 2, 3, 4, 5], [4, 3, 2, 1, 0], [3, 7, 8, 6, 2]]);
// 
// Data Structures:
//   - matrix
//   - newMatrix []
//   - currentRow []
// 
// General Approach:
//   - create the newMatrix
//   - find the rowLimit (number of subArrays)
//   - find the columnLimit (number of elements in a subarray)
//   - iterate through each row (subArray)
//     - get the value at the given index (column) of each subArray
//     - add it to the currentRow
//     -push the currentRow to the newMatrix
//     
// Algorithm:
//   - set newMatrix = [];
//   - set rowLimit = matrix.length - 1
//   - set columnLimit = matrix[0].length - 1
// 
//   - for 0 to columnLimit
//     - set currentRow to []    
//     - for 0 to rowLimit
//       - take value at matrix[i][ind] 
//       - push to currentRow
//     - push currentRow to newMatrix
// 
//   - return newMatrix
//
function transpose(matrix) {
  let newMatrix = [];
  let columnLimit = matrix[0].length - 1;
  let rowLimit = matrix.length - 1;

  for (let i = 0; i <= columnLimit; i += 1) {
    let currentRow = [];
    for (let ind = 0; ind <= rowLimit; ind += 1) {
      currentRow.push(matrix[ind][i]);
    }
    newMatrix.push(currentRow);
  }

  return newMatrix;
}

console.log(transpose([[1, 2, 3, 4]]));            // [[1], [2], [3], [4]]
console.log(transpose([[1], [2], [3], [4]]));      // [[1, 2, 3, 4]]
console.log(transpose([[1]]));                     // [[1]]
console.log(transpose([[1, 2, 3, 4, 5], [4, 3, 2, 1, 0], [3, 7, 8, 6, 2]]));
