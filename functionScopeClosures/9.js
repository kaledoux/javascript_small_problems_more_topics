// let greeter = function() {
//   const name = 'Naveed';
//   const greeting = 'Hello';
// 
//   return {
//     message: `${greeting} ${name}!`,
//     sayGreetings() {
//       console.log(this.message);
//     },
//   }
// }
//
const greeter = {
  message: (function() {
    const name = 'Thelma';
    const greeting = 'Howdy';

    return `${name}, ${greeting}`;
  }()),
  sayGreeting() {
    console.log(this.message);
  },
}
greeter.sayGreeting();  
