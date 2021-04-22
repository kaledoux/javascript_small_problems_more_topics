// Input:
//   - string 
//   - space separated tokens
//   - tokens can be a single number or a word
//   - tokens will all be valid (no validation required)
// Output:
//   - only output is from the result of the PRINT token
//   - number
//   - resulting from processing tokens
// Rules/Reqs:
//   - process string of tokens
//     - each token has a designated function to act on the stack & register:
//       - n : Place a value, n, in the register. Do not modify the stack.
//       - PUSH : Push the register value onto the stack. Leave the value in the register.
//       - ADD : Pop a value from the stack and add it to the register value, 
//               storing the result in the register.
//       - SUB : Pop a value from the stack and subtract it from the register value, 
//               storing the result in the register.
//       - MULT : Pop a value from the stack and multiply it by the register value, 
//               storing the result in the register.
//       - DIV : Pop a value from the stack and divide it into the register value, 
//               storing the integer result in the register.
//       - MOD : Pop a value from the stack and divide it into the register value, 
//               storing the integer remainder of the division in the register.
//       - POP : Remove the topmost item from the stack and place it in the register.
//       - PRINT : Print the register value.
//   - each command is processed in sequence
//   - each command needs to be processed
//   - register - working value, holds digits
//   - stack - memory, array that holds digits as elements
//   
// Test Cases:
// console.log(minilang('PRINT')); // 0
// console.log(minilang('5 PUSH 3 MULT PRINT')); // 15
// console.log(minilang('5 PRINT PUSH 3 PRINT ADD PRINT')); // 5 3 8
// console.log(minilang('5 PUSH POP PRINT')); // 5
// console.log(minilang('3 PUSH 4 PUSH 5 PUSH PRINT ADD PRINT POP PRINT ADD PRINT')); // 5 10 4 7
// console.log(minilang('3 PUSH PUSH 7 DIV MULT PRINT')); // 6
// console.log(minilang('4 PUSH PUSH 7 MOD MULT PRINT')); // 12
// console.log(minilang('-3 PUSH 5 SUB PRINT')); // 8
// console.log(minilang('6 PUSH')); // (nothing is printed)
// 
// Data Structures:
//   - argument is being passed as string
//     - split string into array for iteration
//   - stack is an array of digits
//   - register is number
// General Approach:
//   - create a stack and register [] and 0
//   - take the token string and split it into an array of tokens
//   - for each token, run the corresponding function
//     - sub process - id tokens? 
// Alogrithm:
//   - initialize stack = []
//   - initialize register = 0
//   - set tokens = split tokenString (arg) on spaces
//   - for each token in tokens
//     - if token converted to number is Nan
//      - word tokens
//      - if conditional structure
//    - if not, 
//      - n function
//   - end function
//   - defining function for each token
//     - reassignment for register operations, primitive

function minilang(tokenString) {
  let stack = [];
  let register = 0;
  let tokens = tokenString.split(' ');

  for (let i = 0; i < tokens.length; i += 1) {
    let currentToken = tokens[i];
    if (Number.isNaN(Number(currentToken))) {
      switch (currentToken) {
        case 'PUSH': 
          stack.push(register);
          break;
        case 'ADD': 
          register = stack.pop() + register;
          break;
        case 'SUB':
          register -= stack.pop();
          break;
        case 'MULT':
          register *= stack.pop();
          break;
        case 'DIV':
          register = Math.floor(register / stack.pop());
          break;
        case 'MOD':
          register %= stack.pop();
          break;
        case 'POP':
          register = stack.pop();
          break;
        case 'PRINT':
          console.log(register);
          break;
      }
    } else {
      register = Number(currentToken);
    }
  }

}

console.log(minilang('PRINT')); // 0
console.log(minilang('5 PUSH 3 MULT PRINT')); // 15
console.log(minilang('5 PRINT PUSH 3 PRINT ADD PRINT')); // 5 3 8
console.log(minilang('5 PUSH POP PRINT')); // 5
console.log(minilang('3 PUSH 4 PUSH 5 PUSH PRINT ADD PRINT POP PRINT ADD PRINT')); // 5 10 4 7
console.log(minilang('3 PUSH PUSH 7 DIV MULT PRINT')); // 6
console.log(minilang('4 PUSH PUSH 7 MOD MULT PRINT')); // 12
console.log(minilang('-3 PUSH 5 SUB PRINT')); // 8
console.log(minilang('6 PUSH')); // (nothing is printed)
