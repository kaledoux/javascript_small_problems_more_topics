// Input:
//   - three numbers
//   - can be integers or floats (conversion to float?)
// Output:
//   - string value
//     - 'invalid' - numbers are not valid for triangle
//     - 'equilateral' - number create equilateral triangle
//     - 'isoceles' - numbers create iso tri
//     - ' scalene' - numbers can create scalene
// Rules/Req:
//   - triangle = all three numbers are greater than zero
//                sum of two smallest sides is greater than the largest
//   - equilateral = triangle && all sides equal
//   - isoceles = triangle && two sides equal
//   - scalene = triangle && all sides different
// Test Cases:
// console.log(triangle(3, 3, 3));        // "equilateral"
// console.log(triangle(3, 3, 1.5));      // "isosceles"
// console.log(triangle(3, 4, 5));        // "scalene"
// console.log(triangle(0, 3, 3));        // "invalid"
// console.log(triangle(3, 1, 1));        // "invalid"
// Data Structures:
//   - three numbers
//   - convert to three floats
//   - use floats for calculations
// General Approach:
//   - store all three numbers as floats
//   - run through conditions
//     - is triangle? if not return 'invalid'
//     - check for other types, return as appropriate
// Algorithm:
//   - isTriangle(num1, num2, num3)
//     - if any number === 0, return false
//     - set nums = [num1, num2, num3];
//     - set max = Math.max(nums)
//     - remove max from nums
//     -return max > nums reduced to sum
//   - isEquilateral(num1, num2, num3)
//     - return [num1, num2, num3] reduced to sum / 3 === num 1
//   - isIsosceles(num1, num2, num3) 
//     - set nums = [num1, num2, num3];
//     - set max = Math.max(nums)
//     - remove max from nums
//     - return false if nums[1] !== nums[0]
//   - isScalene(num1, num2, num3)
//     - return false if num1 === num 2 || num1 === num3 || num2 === num3
//     - return true

function isTriangle(num1, num2, num3) {
  let nums = [num1, num2, num3];
  if (nums.includes(0)) { return false };
  let max = Math.max(num1, num2, num3);
  nums.splice(nums.indexOf(max), 1);
  let twoSmallest = nums.reduce((accu, current) => accu + current)
  return max < twoSmallest;
}

function isEquilateral(num1, num2, num3) {
  return ([num1, num2, num3].reduce((accu, current) => accu + current) / 3) === num1;
}

function isIsosceles(num1, num2, num3) {
  return (num1 === num2 || num1 === num3 || num2 === num3);
}

function isScalene(num1, num2, num3) {
  return (num1 !== num2 && num1 !== num3 && num2 !== num3);
}

function triangle(num1, num2, num3) {
  if (!isTriangle(num1, num2, num3)) {
    return 'invalid';
  } else if (isEquilateral(num1, num2, num3)) {
    return 'equilateral';
  } else if (isIsosceles(num1, num2, num3)) {
    return 'isosceles';
  } else if (isScalene(num1, num2, num3)) {
    return 'scalene';
  }
}

console.log(triangle(3, 3, 3));        // "equilateral"
console.log(triangle(3, 3, 1.5));      // "isosceles"
console.log(triangle(3, 4, 5));        // "scalene"
console.log(triangle(0, 3, 3));        // "invalid"
console.log(triangle(3, 1, 1));        // "invalid"
