// Write a function that takes a string argument, and returns a list of all substrings that start from the beginning of the string, ordered from shortest to longest.

// function leadingSubstrings(string) {
//   let slices = [];
//   for (let i = 1; i <= string.length; i += 1) {
//     slices.push(string.slice(0, i));
//   }
//   return slices;
// }

// console.log(leadingSubstrings('abc'));      // ["a", "ab", "abc"]
// console.log(leadingSubstrings('a'));        // ["a"]
// console.log(leadingSubstrings('xyzzy'));    // ["x", "xy", "xyz", "xyzz", "xyzzy"]

function leadingSubstrings(string) {
  return string.split('').map((char, ind, array) => array.slice(0, ind + 1).join(''));
}

console.log(leadingSubstrings('abc'));      // ["a", "ab", "abc"]
console.log(leadingSubstrings('a'));        // ["a"]
console.log(leadingSubstrings('xyzzy'));    // ["x", "xy", "xyz", "xyzz", "xyzzy"]
