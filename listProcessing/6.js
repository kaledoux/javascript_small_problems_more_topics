// Write a function that returns a list of all substrings of a string. Order the returned list by where in the string the substring begins. This means that all substrings that start at position 0 should come first, then all substrings that start at position 1, and so on. Since multiple substrings will occur at each position, return the substrings at a given position from shortest to longest.

function leadingSubstrings(string) {
  return string.split('').map((char, ind, array) => array.slice(0, ind + 1).join(''));
}

function substrings(string) {
  return [...string].map((char, ind, arr) => leadingSubstrings(arr.slice(ind, arr.length).join('')))
                    .flat();
}

console.log(substrings('abcde'));
