// Goal:
//   - implement a binary search function
// Input:
//   - array - sorted array
//   - can be integers, or strings
//   * alternate types? Empty?
//   - searchItem - element to be found within the array
//     * will searchItem always be the same data type? error for mismatched data types?
// Output:
//   - integer
//     - index of searchItem within array
//     - or -1 if not found
// Rules/Req:
//   - binary search => check middle value of array, if value matches return index
//     - if middle value is greater than searchItem, repeat the search with the first half
//     - if middle value is less, repeat search with second half
//   - searchItem type will match array element's types
//   - index returned must be relative to whoe array, not subsection
// Test Cases:
// const yellowPages = ['Apple Store', 'Bags Galore', 'Bike Store', 'Donuts R Us', 'Eat a Lot', 'Good Food', 'Pasta Place', 'Pizzeria', 'Tiki Lounge', 'Zooper'];
// binarySearch(yellowPages, 'Pizzeria');                   // 7
// binarySearch(yellowPages, 'Apple Store');                // 0
// 
// binarySearch([1, 5, 7, 11, 23, 45, 65, 89, 102], 77);    // -1
// binarySearch([1, 5, 7, 11, 23, 45, 65, 89, 102], 89);    // 7
// binarySearch([1, 5, 7, 11, 23, 45, 65, 89, 102], 5);     // 1
// 
// binarySearch(['Alice', 'Bonnie', 'Kim', 'Pete', 'Rachel', 'Sue', 'Tyler'], 'Peter');  // -1
// binarySearch(['Alice', 'Bonnie', 'Kim', 'Pete', 'Rachel', 'Sue', 'Tyler'], 'Tyler');  // 6
// 
// Data Structures:
//   - given array and searchItem
//   - recursively searching through slices of array
//   - variable to hold current slice
//   - value to maintain the relative index (add size of array slice?)
// 
// a-b-c-d-e-f-g 0-6
// remove abc add 3
// d-e-f-g
// find f at index 2
// add 3 and 2 => 5
// 
// General Approach:
//   - assign a midpoint index 
//   - create a relativeIndex counter
//   - loop
//     - if the middle indexed value is found, return the index 
//     - if greater than searchItem, slice the array and add to relativeIndex
//     - if less than searchItem, slice the array and add to relativeIndex
// Algorithm:
//   - set relativeIndex = 0;
//   - set currentSlice = array.slice();
//   - while true
//     - set midIndex = floor currentSlice.length / 2
//     - if array[midIndex] is equal to searchItem
//       return currentSlice indexOf searchItem + relative index
//     - if array[midIndex] is greater than searchItem
//       - set relativeIndex += currentSlice.slice(midIndex) length (# of elements getting sliced)
//       - set currentSlice = currentSlice.slice(0, midIndex)
//     - if array[midIndex] is less than searchItem
//       - set relativeIndex += currentSlice.slice(0, midIndex) length 
//       - set currentSlice = currentSlice.slice(midIndex)
//     - if currentSlice length is equal to 1
//        - break the loop
//   - return -1
    
function binarySearch(array, searchItem) {
  let relativeIndex = 0;
  let currentSlice = array.slice();

  while (true) {
    let midIndex = Math.floor(currentSlice.length / 2);
    console.log(midIndex);
    console.log(searchItem);
    console.log(currentSlice[midIndex]);
    if (currentSlice[midIndex] === searchItem) {
      return relativeIndex + midIndex;
    } else if (array[midIndex] > searchItem) {
      relativeIndex += currentSlice.slice(midIndex).length;
      currentSlice = currentSlice.slice(0, midIndex);
    } else if (array[midIndex] < searchItem) {
      relativeIndex += currentSlice.slice(0, midIndex).length;
      currentSlice = currentSlice.slice(midIndex);
    }
    if (currentSlice.length === 1) { 
      return currentSlice[0] === searchItem ? relativeIndex : -1;
    }
  }
}

const yellowPages = ['Apple Store', 'Bags Galore', 'Bike Store', 'Donuts R Us', 'Eat a Lot', 'Good Food', 'Pasta Place', 'Pizzeria', 'Tiki Lounge', 'Zooper'];
console.log(binarySearch(yellowPages, 'Pizzeria'));                   // 7
console.log(binarySearch(yellowPages, 'Apple Store'));                // 0
// console.log(binarySearch([1, 5, 7, 11, 23, 45, 65, 89, 102], 77));    // -1
// console.log(binarySearch([1, 5, 7, 11, 23, 45, 65, 89, 102], 89));    // 7
// console.log(binarySearch([1, 5, 7, 11, 23, 45, 65, 89, 102], 5));     // 1
// console.log(binarySearch(['Alice', 'Bonnie', 'Kim', 'Pete', 'Rachel', 'Sue', 'Tyler'], 'Peter'));  // -1
// console.log(binarySearch(['Alice', 'Bonnie', 'Kim', 'Pete', 'Rachel', 'Sue', 'Tyler'], 'Tyler'));  // 6
