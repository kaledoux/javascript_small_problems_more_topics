// Write a function that takes an array of integers between 0 and 19, and returns an array of those integers sorted based on the English word for each number:
const ALPHA_NUMBERS = 
  ['zero', 'one', 'two', 'three', 'four', 'five',
   'six', 'seven', 'eight', 'nine', 'ten', 'eleven',
   'twelve', 'thirteen', 'fourteen', 'fifteen',
   'sixteen', 'seventeen', 'eighteen', 'nineteen'];


function sortWords(num1, num2) {
  if (ALPHA_NUMBERS[num1] > ALPHA_NUMBERS[num2]) {
    return 1;
  } else if (ALPHA_NUMBERS[num1] === ALPHA_NUMBERS[num2]) {
    return 0;
  } else {
    return -1;
  }
}

function alphabeticNumberSort(numberArray) {
  return numberArray.sort(sortWords);
}

console.log(alphabeticNumberSort(
   [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19]));


