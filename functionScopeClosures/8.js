function newStack() {
  let stack = [];
  return {
    push(val) {
      stack.push(val);
      return val;
    },
    pop() {
      return stack.pop();
    },
    printStack() {
      stack.forEach(ele => console.log(ele));
    },
  }
}

let stack = newStack();
console.log(stack.push('a'));
console.log(stack.push('b'));
console.log(stack.push('c'));
console.log(stack.pop());
console.log(stack.printStack());

console.log(stack.stack);
