lastGameHistory = [];
let minutesTimer = 0;
let secondsTimer = 0;
let points = 0;
let penalty = 0;
let myInterval;
let isRunning = false;
let lastTime = '';


//för att starta, stoppa, återställa använder ni timer('start'),timer('stop'),timer('reset')
export default function timer(arg) {

  const container = document.getElementById('displayTimerContainer');
  
  if (arg === 'start' && !isRunning) {
    myInterval = setInterval(myTimer, 1000);
    isRunning = true;
  } else if (arg === 'stop' && isRunning) {
    clearInterval(myInterval);
    penalty++;
    isRunning = false;

    console.log('you have used facit ' + penalty + ' times');
    console.log('you have :' + points + ' points');

  } else if (arg === 'reset') {
    lastTime = container.textContent;
    let lastGame = {
      minutes: minutesTimer,
      seconds: secondsTimer,
      points: points,
      penalty: penalty,
      lastTime: lastTime,
    };
    lastGameHistory.push(lastGame);

    clearInterval(myInterval);
    minutesTimer = 0;
    secondsTimer = 0;
    points = 0;
    penalty = 0;
    isRunning = false;
    updateTimerDisplay();

    console.log('your final time was: ' + lastTime);
  }
}

function myTimer() {
  secondsTimer++;
  points++;
  if (secondsTimer >= 60) {
    minutesTimer++;
    secondsTimer = 0;
  }
  updateTimerDisplay();
}

function updateTimerDisplay() {
  const container = document.getElementById('displayTimerContainer');
  //padstart ändrar så att klockam ser mer ut som digitalklocka.
  //istället för 1:5 så ser de ut som 01:05
  container.textContent = `${String(minutesTimer).padStart(2, '0')}:${String(
    secondsTimer
  ).padStart(2, '0')}`;
}