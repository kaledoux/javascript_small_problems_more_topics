// Input:
//   - three numbers
//   - integers only, no floating points
//   - 0 or higher, no negatives
//   - represent degrees (no conversion)
// Output:
//   - string: 'right', 'acute', 'obtuse', 'invalid'
// Rules/Req:
//   - use the three supplied angles to determine the classification of a triangle
//     - Triangle: sum of angles is 180, every angle greater than 0.
//     - Right: triangle & One angle is a right angle (exactly 90 degrees).
//     - Acute: triangle & All three angles are less than 90 degrees.
//     - Obtuse: triangle &  One angle is greater than 90 degrees.
//     - Invalid: None of the above
//   - don't have to worry about invalid data types, too many args, or empty args*
// Test Cases:
// triangle(60, 70, 50);       // "acute"
// triangle(30, 90, 60);       // "right"
// triangle(120, 50, 10);      // "obtuse"
// triangle(0, 90, 90);        // "invalid"
// triangle(50, 50, 50);       // "invalid"
// triangle(0, 0, 0);       // "invalid"
// triangle(80, 80, 80);       // "invalid"
// triangle(180, 0, 0);       // "invalid"
// Data Structures:
//   - given three integers
//   - use integers to make classifications
// General Approach:
//   - create functions to classify:
//     - isTriangle
//     - isRight
//     - isObtuse
//     - isAcute
//   - check if number is triangle
//   - determine which type it is
// Algorithm:
//   - define functions
//     **
//   - conditional branch
//     - if isTriangle
//       - if isRight; return 'right'
//       - if isObtuse; return 'obtuse'
//       - else ; return 'acute'
//     - else 
//       - return 'invalid'

function isTriangle(...angles) {
  return (!angles.includes(0) && angles.reduce((accu, curr) => accu + curr) === 180) 
}

function isRight(...angles) {
  return (angles.includes(90)) 
}

function isObtuse(angle1, angle2, angle3) {
  return (Math.max(angle1, angle2, angle3) > 90) 
}

function triangle(angle1, angle2, angle3) {
  if (isTriangle(angle1, angle2, angle3)) {
    if (isRight(angle1, angle2, angle3)) {
      return 'right';
    } else if (isObtuse(angle1, angle2, angle3)) {
      return 'obtuse';
    } else {
      return 'acute';
    }
  } else {
    return 'invalid';
  }
}


console.log(triangle(60, 70, 50));       // "acute"
console.log(triangle(30, 90, 60));       // "right"
console.log(triangle(120, 50, 10));      // "obtuse"
console.log(triangle(0, 90, 90));        // "invalid"
console.log(triangle(50, 50, 50));       // "invalid"
console.log(triangle(0, 0, 0));       // "invalid"
console.log(triangle(80, 80, 80));       // "invalid"
console.log(triangle(180, 0, 0));       // "invalid"
