// Input:
//   - integer (n)
//   - non-negative, > 0
// Output:
//   - array
//   - elements will be integers
// Rules/Reqs:
//   - return an array that contains all values from 1 to n that have been activated after n passes
//   - each pass will change the state of a certain factor ( first pass 1, second pass 2, third pass 3)
//   - if state is activated after n iterations, it should be part of the final array
//   
// Test Cases:
// console.log(lightsOn(5));        // [1, 4]
// console.log(lightsOn(100));      // [1, 4, 9, 16, 25, 36, 49, 64, 81, 100]
// console.log(lightsOn(1));      // [1]
// 
// General Approach:
//   - from 1 to n, move through / add values to an object
//     - if the value doesn't exist (first pass) create it and set value to true
//     - if it does exist, (subsequent iterations) flip the value from true to false or vice versa
//   - using the object, iterate through each property
//     - if the value is true add it to a final array
// 
// Data Structure:
//   - given integer
//   - build object
//   - build final array
// 
// Algorithm:
//   - set lights = {}
//   - for 1 to n
//     - set lights[n] to true
//   - for 2 to n
//     - for 1 to n
//      - if current index is divisible by outer index
//      - set lights[i] to !lights[i]
//   - set activated = []
//   - for each key in lights
//     - if lights[key] is true
//     - push value to activated
//   - return activated

function lightsOn(n) {
  let lights = {};
  for (let i = 1; i <= n; i += 1) {
    lights[i] = true;
  }

  for (let outerInd = 2; outerInd <= n; outerInd += 1) {
    for (let innerInd = 1; innerInd <= n; innerInd += 1) {
      if (innerInd % outerInd === 0) { 
        lights[innerInd] = !lights[innerInd];
      }
    }
  }

  let activated = [];
  Object.keys(lights).forEach(light => {
    if (lights[light] === true) { activated.push(light) };
  });

  return activated;
}
  
console.log(lightsOn(5));        // [1, 4]
console.log(lightsOn(100));      // [1, 4, 9, 16, 25, 36, 49, 64, 81, 100]
console.log(lightsOn(1));      // [1]
