import { socket } from "./socket.mjs"
import facitPopup from "./facitPopup.mjs";

export default function compareGridImage(pictureName) {
  let currentGame = null;
  let keyFacit = null;
  let displayTimerContainer = document.getElementById("displayTimerContainer");

  //Förfrågan om hela objektet för spelet vi spelar nu. 
  socket.emit("getCurrentGame", (pictureName));
  socket.emit("getKey", (pictureName));

  // Lyssna på svaret + använda oss av de två objekten som vi får. 
  socket.on("getCurrentGame", (currentGameArray) => {
    currentGame = currentGameArray;
  });
  socket.on("getKey", (facitArray) => {
    keyFacit = facitArray;

    let percentageRight = 0;
    percentageRight = compareAnswers(currentGame, keyFacit);
    facitPopup(displayTimerContainer.textContent, percentageRight, pictureName);
  });
}

function compareAnswers(currentGame, keyFacit) {
  let amountOfRight = 0;
  let amountOfGrid = 0;

  currentGame.forEach((currentObj) => {
    keyFacit.forEach((facitObj) => {
      if (currentObj.pictureCoordinate === facitObj.pictureCoordinate) {
        amountOfGrid++;
        if (currentObj.pictureColor === facitObj.pictureColor) {
          amountOfRight++;
        }
      }
    });
  });

  let percentageRight = 0;
  if (amountOfGrid > 0) { // Prevent division by zero
    percentageRight = Math.round((amountOfRight / amountOfGrid) * 100);
  }

  return percentageRight;
}