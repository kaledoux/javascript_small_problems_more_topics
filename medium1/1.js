// Write a function that rotates an array by moving the first element to the end of the array. Do not modify the original array.

//     If the input is not an array, return undefined.
//     If the input is an empty array, return an empty array.
// 
// Review the test cases below, then implement the solution accordingly.

// console.log(rotateArray([7, 3, 5, 2, 9, 1]));       // [3, 5, 2, 9, 1, 7]
// console.log(rotateArray(['a', 'b', 'c']));          // ["b", "c", "a"]
// console.log(rotateArray(['a']));                    // ["a"]
// console.log(rotateArray([1, 'a', 3, 'c']));         // ["a", 3, "c", 1]
// console.log(rotateArray([{ a: 2 }, [1, 2], 3]));    // [[1, 2], 3, { a: 2 }]
// console.log(rotateArray([]));                       // []

// return `undefined` if the argument is not an array
// console.log(rotateArray());                         // undefined
// console.log(rotateArray(1));                        // undefined


// the input array is not mutated
// const array = [1, 2, 3, 4];
// rotateArray(array);                    // [2, 3, 4, 1]
// console.log(array);                                 // [1, 2, 3, 4]

// Input:
//  - array
//  - can contain any type of valid value
//  - can contain mixed value types (string and number)
//  Output:
//    - new array
//    - first element is shifted to the last element
//    - if no array provided as arg, undefined
//  Requirements:
//    - a new array is returned, and the original array is not mutated
//    - new array must have first value shifted to end of array
//      ([1, 2, 3] => [2, 3, 1])
//    - must be able to handle function call without any supplied arg
//      - returns undefined
//    - if arg is not an array
//      - returns undefined
//
//  Test Cases:
// console.log(rotateArray([7, 3, 5, 2, 9, 1]));       // [3, 5, 2, 9, 1, 7]
// console.log(rotateArray(['a', 'b', 'c']));          // ["b", "c", "a"]
// console.log(rotateArray(['a']));                    // ["a"]
// console.log(rotateArray([1, 'a', 3, 'c']));         // ["a", 3, "c", 1]
// console.log(rotateArray([{ a: 2 }, [1, 2], 3]));    // [[1, 2], 3, { a: 2 }]
// console.log(rotateArray([]));                       // []
// // return `undefined` if the argument is not an array
// console.log(rotateArray());                         // undefined
// console.log(rotateArray(1));                        // undefined
// // the input array is not mutated
// const array = [1, 2, 3, 4];
// rotateArray(array);                    // [2, 3, 4, 1]
// console.log(array);                                 // [1, 2, 3, 4]
//
// General Approach:
//  - check the arguments validity
//    - is it an array?
//  - create a new array that is distinct from argument
//    - create local var and add iteratively
//  - mutate the new array 
//    -remove first element
//    - shift all other elements back 
//    - push removed element to last index
//  - return new array
//
//  Algorithm:
//  - check if argument (oldArray) isArray()
//    - return undefined if not
//    - if oldArray.isEmpty() 
//      - return []
//  - initialize a new array object newArray
//  - iterate through oldArray
//    - push each value at indexed position to newArray
//  - shift first value from newArray
//  - push shifted value to newArray
//  -return newArray
//
function rotateArray(oldArray) {
  if (Array.isArray(oldArray)) {
    if (oldArray.length === 0) { return [] };
  } else { 
    return undefined; 
  }

  let newArray = [];
  for (let i = 0; i < oldArray.length; i += 1) { newArray.push(oldArray[i]) }

  newArray.push(newArray.shift());
  return newArray;
}

console.log(rotateArray([7, 3, 5, 2, 9, 1]));       // [3, 5, 2, 9, 1, 7]
console.log(rotateArray(['a', 'b', 'c']));          // ["b", "c", "a"]
console.log(rotateArray(['a']));                    // ["a"]
console.log(rotateArray([1, 'a', 3, 'c']));         // ["a", 3, "c", 1]
console.log(rotateArray([{ a: 2 }, [1, 2], 3]));    // [[1, 2], 3, { a: 2 }]
console.log(rotateArray([]));                       // []
// // return `undefined` if the argument is not an array
console.log(rotateArray());                         // undefined
console.log(rotateArray(1));                        // undefined
// the input array is not mutated
const array = [1, 2, 3, 4];
console.log(rotateArray(array));                    // [2, 3, 4, 1]
console.log(array);                                 // [1, 2, 3, 4]
