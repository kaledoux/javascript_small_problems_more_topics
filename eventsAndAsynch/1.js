function randomizer(...callbacks) {
  let numOfFunctions = callbacks.length;
  let seconds = 0;
  
  function setTime(n) {
    return Math.floor(Math.random() * ((n * 2) + 1));
  }

  const time = setInterval(() => {
    seconds += 1;
    console.log(seconds);

    if (seconds >= numOfFunctions * 2) {
      clearInterval(time);
    }
  }, 1000)

  callbacks.forEach(fun => setTimeout(fun, setTime(numOfFunctions * 1000)));
}

function callback1() {
  console.log('callback1');
}

function callback2() {
  console.log('callback2');
}

function callback3() {
  console.log('callback3');
}

randomizer(callback1, callback2, callback3);
