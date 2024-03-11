let msg = document.getElementById('main');
let dotCount = 1;
let playerColor = [];
let waitingInterval = setInterval(waitingMsg, 1000);
let startcounter = 5;

function dotCounter() {
  if (dotCount > 3) {
    dotCount = 1;
  } else {
    dotCount += 1;
  }
}

function startgame() {
  msg.textContent = 'Grid genereted here';
  clearInterval(waitingInterval);
}

function waitingMsg() {
  if (playerColor.length == 0) {
    if (startcounter > 0) {
      msg.textContent = 'Game is starting in: ' + startcounter + '...';
      startcounter--;
    } else {
      startgame();
    }
  } else {
    let message = 'Waiting for players';
    let dots = '.'.repeat(dotCount);
    dotCounter();
    msg.textContent = message + dots;
  }
}
