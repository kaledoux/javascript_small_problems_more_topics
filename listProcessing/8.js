// Write a function that takes a grocery list (a two-dimensional array) with each element containing a fruit and a quantity, and returns a one-dimensional array of fruits, in which each fruit appears a number of times equal to its quantity.

function buyFruit(fruitArray) {
  let fruits = [];
  fruitArray.forEach(ele => {
    for (let i = 1; i <= ele[1]; i += 1) {
      fruits.push(ele[0]);
    }
  });
  return fruits;
}

console.log(buyFruit([['apple', 3], ['orange', 1], ['banana', 2]]));
