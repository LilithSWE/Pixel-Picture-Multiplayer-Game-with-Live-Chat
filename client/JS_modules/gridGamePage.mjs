import gridGenerator from "./gridGenerator.mjs";
import { socket } from "./socket.mjs"
import timer from "./timerStart.mjs";

export default function generateGridGamePage(picture) {
  let msg = document.getElementById('gridContainer');
  let dotCount = 1;
  let allPlayerColors = picture[0].pictureColors;
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
    msg.innerHTML = "";
    gridGenerator(picture, "gridContainer"); // send in full object + name of the container you wish to dislay the grid into.
    clearInterval(waitingInterval);
    timer("start");
    const finishBtn = document.getElementById("finishGameBtn");
    finishBtn.disabled = false;
    console.log(finishBtn);
  }

  function waitingMsg() {
    if (allPlayerColors.length == 0) {
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

  socket.on("updatedPicture", (updatedPicture) => {
    gridGenerator(updatedPicture, "gridContainer");
  });
};

