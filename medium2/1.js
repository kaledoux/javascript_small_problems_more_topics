// // Write a function that takes a string, and returns an object containing the following three properties:
// // 
// // the percentage of characters in the string that are lowercase letters
// // the percentage of characters that are uppercase letters
// // the percentage of characters that are neither
// // 
// // You may assume that the string will always contain at least one character.
// 
// Input:
//   - string
//   - at least one character
//   - can be letters, numbers, or special chars
// Output:
//   - object
//   - three properties: lowercase: string representation of decimal rounded to 2 places
//                       uppercase: '' ''
//                       neither:   '' ''
// Rules/Req:
//   - parse string char by char
//     - count totals of each category of char (upper, lower, neither)
//     - use totals comared to total length to find the percent of chars in each
//   - return object that contains the char percentage information
//   - spaces count as neither
// Test Cases:
// console.log(letterPercentages('abCdef 123'));
// console.log(letterPercentages('AbCd +Ef'));
// console.log(letterPercentages('123'));
// Data Structures:
//   - starting with string
//   - split into array of chars
//   - local vars to hold counts of each type of char
//   - local var to hold total 
//   - object to store calculated percentages
// General Approach:
//   - make function to calculate a percentage and format to rounded string
//   - split the string into chars
//     - iterate through each char
//     - increment the associated category var
//   - create the object by adding values for each category using the function to find average
// Algorithm:
//   - to find average
//     - given two numbers (total, countOf)
//     - set countOf / total toFixed(2)
//     - return /\
//   - for percentages
//     - initialize local vars to hold counts: upper, lower, neither
//     - initialize totalLetters
//     - set var chars = split string into array
//     - set value of totalLetters to length of chars
//       - for each char
//         -if /[a-z]/ matches char => increment lower
//         - if /[A-Z]/ matches char => increment upper
//         - else => increment neither 
//     initialize object percentages { 'upper': findAverage(totalLetters, upper),
//         ...
//    - return percentages 
      
function findAverage(total, countOf) {
  return (countOf / total * 100).toFixed(2);
}

function letterPercentages(string) {
  let upper = 0;
  let lower = 0;
  let neither = 0;
  let chars = string.split('');
  let totalLetters = chars.length;

  chars.forEach(char => {
    if (/[a-z]/.test(char)) {
      lower += 1;
    } else if (/[A-Z]/.test(char)) {
      upper += 1;
    } else {
      neither += 1;
    }
  });

  return {
    'upper': findAverage(totalLetters, upper),
    'lower': findAverage(totalLetters, lower),
    'neither': findAverage(totalLetters, neither)
  }
}
console.log(letterPercentages('abCdef 123'));
console.log(letterPercentages('AbCd +Ef'));
console.log(letterPercentages('123'));
