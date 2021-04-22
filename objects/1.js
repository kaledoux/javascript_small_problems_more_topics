// The code below is expected to output the following when run:

const helloVictor = createGreeter('Victor');
helloVictor.greet('morning');
// Good Morning Victor

function createGreeter(name) {
  return {
    name,
    morning: 'Good Morning',
    afternoon: 'Good Afternoon',
    evening: 'Good Evening',
    greet(timeOfDay) {
      let msg = '';
      switch (timeOfDay) {
        case 'morning':
          msg += `${this.morning} ${name}`; // should reference this.morning etc
          break;
        case 'afternoon':
          msg += `${afternoon} ${name}`;
          break;
        case 'evening':
          msg += `${evening} ${name}`;
          break;
      }

      console.log(msg);
    },
  };
}

// However, it instead results in an error. What is the problem with the code? Why isn't it producing the expected results?
