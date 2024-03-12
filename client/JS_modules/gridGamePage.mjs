import gridGenerator from "./gridGenerator.mjs";
import { io } from "socket.io-client";
const socket = io("http://localhost:3000"); //https://squid-app-cg7rw.ondigitalocean.app/

export default function generateGridGamePage(picture) {
  let msg = document.getElementById('gridContainer');
  let dotCount = 1;
  let allPlayerColors = picture[0].playerColors;
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

  socket.on("updateColorArray", (playerColors) => {
    allPlayerColors = playerColors;
  });

  socket.on("updatedPicture", (updatedPicture) => {
    gridGenerator(updatedPicture);
  });
};

