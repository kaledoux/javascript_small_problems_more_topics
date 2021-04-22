// Write a function that takes two array arguments, each containing a list of numbers, and returns a new array containing the products of all combinations of number pairs that exist between the two arrays. The returned array should be sorted in ascending numerical order.

// You may assume that neither argument will be an empty array.

function multiplyAllPairs(arr1, arr2) {
  let products = [];
  arr1.forEach(number => arr2.forEach(num => products.push(number * num)));
  return products.sort((num1, num2) => {
    if (num1 > num2) {
      return 1;
    } else if (num2 > num1) {
      return -1;
    } else {
      return 0;
    }
  });
}

console.log(multiplyAllPairs([2, 4], [4, 3, 1, 2]));
