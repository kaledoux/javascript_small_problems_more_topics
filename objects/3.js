// In JavaScript, comparing two objects either with == or === checks for object identity. In other words, the comparison evaluates to true if it's the same object on either side of == or ===. This is a limitation, in a sense, because sometimes we need to check if two objects have the same key/value pairs. JavaScript doesn't give us a way to do that.

// Write a function objectsEqual that accepts two object arguments and returns true or false depending on whether the objects have the same key/value pairs.

function objectsEqual(obj1, obj2) {
  let keys1 = Object.keys(obj1);
  let keys2 = Object.keys(obj2);

  for (let i = 0; i < keys1.length; i++) {
    let key = keys1[i];
    if (obj1[key] !== obj2[key]) { return false };
  }
  for (let i = 0; i < keys2.length; i++) {
    let key = keys2[i];
    if (obj1[key] !== obj2[key]) { return false };
  }
  return true;
}

console.log(objectsEqual({a: 'foo'}, {a: 'foo'}));                      // true
console.log(objectsEqual({a: 'foo', b: 'bar'}, {a: 'foo'}));            // false
console.log(objectsEqual({}, {}));                                      // true
console.log(objectsEqual({a: 'foo', b: undefined}, {a: 'foo', c: 1}));  // false

