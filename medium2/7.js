// Input:
//   - array
//   - length 2 or greater
//   - strings or integers * other value types?
//   * mixed data types within array?
//   - invalid data types?
// Output:
//   - same array, sorted
// Rules/Req:
//   - bubble sort:
//     - pass through array, swap a pair of elements if the first value is greater than the second
//     - continue passing through array until no swaps can be made
//   * default sorting behavior?
// Test Cases:
// const array1 = [5, 3];
// bubbleSort(array1);
// console.log(array1);    // [3, 5]
// 
// const array2 = [6, 2, 7, 1, 4];
// bubbleSort(array2);
// console.log(array2);    // [1, 2, 4, 6, 7]
// 
// const array3 = ['Sue', 'Pete', 'Alice', 'Tyler', 'Rachel', 'Kim', 'Bonnie'];
// bubbleSort(array3);
// console.log(array3);    // ["Alice", "Bonnie", "Kim", "Pete", "Rachel", "Sue", "Tyler"]
// Data Structures:
//   - given array of elements
//   - loop and operate on same array
// General Approach:
//   - start while loop
//   - on each pass, bubble sort 2 items
//     - continue
//   - break
//   - return array
// Algorithm:
//   - start with array
//   - loop
//     - if swap available * sub process *
//       - make swap * sub process *
//     - else break
//   - return array

function swapAvailable(array) {
  for (let i = 0; i < array.length; i += 1) {
    if (array[i] > array[i + 1]) { return true };
  }
  return false;
}

function makeSwap(array) {
  for (let i = 0; i < array.length; i += 1) {
    let val1 = array[i];
    let val2 = array[i + 1];
    if (val1 > val2) {
      [array[i], array[i + 1]] = [val2, val1];
      break;
    }
  }
  return array;
}

function bubbleSort(array) {
  while (true) {
    if (swapAvailable(array)) {
      makeSwap(array);
    } else {
      break;
    }
  }
  return array;
}



const array1 = [5, 3];
bubbleSort(array1);
console.log(array1);    // [3, 5]

const array2 = [6, 2, 7, 1, 4];
bubbleSort(array2);
console.log(array2);    // [1, 2, 4, 6, 7]

const array3 = ['Sue', 'Pete', 'Alice', 'Tyler', 'Rachel', 'Kim', 'Bonnie'];
bubbleSort(array3);
console.log(array3);    // ["Alice", "Bonnie", "Kim", "Pete", "Rachel", "Sue", "Tyler"]
