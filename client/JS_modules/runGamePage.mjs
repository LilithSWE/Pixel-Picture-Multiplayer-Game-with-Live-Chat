import generateHeaderContentGamePage from "./headerContentGamePage.mjs";
import generateChatGamePage from "./chatGamePage.mjs";
import generateGridGamePage from "./gridGamePage.mjs";
import generateTimerAndBtnGamePage from "./timerAndBtnsGamePage.mjs";
import timer from "./timerStart.mjs";

let mainContainer = document.getElementById("main");
localStorage.setItem("userName", "Amanda") // ENDAST FÖR TESTNING

export default function runGamePage(picture) {  // tar emot hela objektet! 
  mainContainer.innerHTML = "";
  localStorage.setItem("game", picture.pictureName);

  // IF lobby is gone/ done. Do timer("start")

  // Creates all containers for various containers + gives them an id for later targeting. 
  const playerInfoContainer = document.createElement("header");
  playerInfoContainer.setAttribute("id", "playerInfoContainer");
  const chatContainer = document.createElement("div");
  chatContainer.setAttribute("id", "chatContainer");
  const gridContainer = document.createElement("div");
  gridContainer.setAttribute("id", "gridContainer");
  const timerAndBtnContainer = document.createElement("div");
  timerAndBtnContainer.setAttribute("id", "timerAndBtnContainer");

  mainContainer.append(playerInfoContainer, chatContainer, gridContainer, timerAndBtnContainer)

  // Functions that generates the html + connects to the necessary functions used to run them.
  generateHeaderContentGamePage();
  generateChatGamePage(picture.pictureName);
  generateGridGamePage(picture); // Kallar bl.a. på Miakels gridGenerator
  generateTimerAndBtnGamePage(); // bara en consol.log för tillfället
}
