// Goal:
//   - take two sorted arrays and merge them into one sorted array
// Input:
//   - arr1 - sorted array of varying length (0 elements to n)
//   - arr2 - ""
//   * what types of values are contained ? just integers?
//   - arr1 and arr2 can have different lengths
// Output:
//   - mergedArray - one array containing all elements of arr1 and arr2, sorted
//   * for invalid data types or too many/few arguments?
// Rules/Req:
//   - solution must build merged array one element at a time in order 
//     - cannot sort the final array after the fact
//   - arr1 and arr2 should not be mutated
//   - if either arr1/2 is empty, return the contents of the non-empty arr
// Test Cases:
// console.log(merge([1, 5, 9], [2, 6, 8]));      // [1, 2, 5, 6, 8, 9]
// console.log(merge([1, 1, 3], [2, 2]));         // [1, 1, 2, 2, 3]
// console.log(merge([], [1, 4, 5]));             // [1, 4, 5]
// console.log(merge([1, 4, 5], []));             // [1, 4, 5]
// console.log(merge([], []));             // []
// 
// Data Structures:
//   - given two arrays arr1 arr2
//   - new array to hold merged contents (mergedArray)
//   - track indexes for both arrays
//     - indexA for first array
//     - indexB for second array
//   - assign values for current value of each array at index?
// 
// General Approach:
//   - set new mergedArray []
//   - check if either arr is empty
//     - return as necessary
//   - set indexA and indexB to 0
//   - loop until indexA has passed the last value in arr1 && indexB of arr2
//     * create a set of final values for easy reference?
//     - check if indexed value of first array is less,greater,equal to indexed of second array
//       * if final index reached, value will be undefined, so need to accommodate comp
//     - if one is smaller, add that one and increment the associated index
//     - if same, add both and increment both indexes
//   
// Algorithm:
//   - if arr1 is length 0; return new copy of arr2
//   - if arr2 is length 0; return new copy of arr1
//     * function to abstract this *
// 
//   - set mergedArray = []
//   - set arr1Limit = arr1.length
//   - set arr2Limit = arr2.length
//   - set index1 = 0, index2 = 0
// 
//   - loop while index1 < arr1Limit && index2 < arr2Limit
//     - set value1 = arr1[index1]
//     - set value2 = arr2[index2]
//     - if either value1/2 is equal to undefined
//       - if value1; push value2 to mergedArray and increment index2
//       - if value2; push value1 to mergedArray and increment index1
//     - if value1 < value2
//       - push value1 to mergedArray and increment index1
//     - if value2 < value1
//       - push value2 to mergedArray and increment index2
//     - else (both are equal) 
//       - push both and increment both
//   
//   - return mergedArray
//   
//   - newArray(array)
//     - create newArray []
//     for 0 to the length of array
//       - push value into newArray
//     - return newArray
//
function newArray(array) {
  let newArray = [];
  array.forEach(element => newArray.push(element));
  return newArray;
}

function merge(arr1, arr2) {
  if (arr1.length === 0) { return newArray(arr2) };
  if (arr2.length === 0) { return newArray(arr1) };

  let mergedArray = [];
  let index1 = 0;
  let index2 = 0;

  while (index1 < arr1.length || index2 < arr2.length) {
    let value1 = arr1[index1];
    let value2 = arr2[index2];
    if (value1 === undefined || value2 === undefined) {
      if (value1 === undefined) {
        mergedArray.push(value2);
        index2 += 1;
      } else {
        mergedArray.push(value1);
        index1 += 1;
      }
    } else if (value1 < value2) {
      mergedArray.push(value1);
      index1 += 1;
    } else if (value2 < value1) {
      mergedArray.push(value2);
      index2 += 1;
    } else {
      mergedArray.push(value1, value2);
      index1 += 1;
      index2 += 1;
    }
  }

  return mergedArray;
}

console.log(merge([1, 5, 9], [2, 6, 8]));      // [1, 2, 5, 6, 8, 9]
console.log(merge([1, 1, 3], [2, 2]));         // [1, 1, 2, 2, 3]
console.log(merge([], [1, 4, 5]));             // [1, 4, 5]
console.log(merge([1, 4, 5], []));             // [1, 4, 5]
console.log(merge([], []));             // []
