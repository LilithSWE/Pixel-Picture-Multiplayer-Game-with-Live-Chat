import generateHeaderContentGamePage from "./headerContentGamePage.mjs";
import generateChatGamePage from "./chatGamePage.mjs";
import generateGridGamePage from "./gridGamePage.mjs";
import generateTimerAndBtnGamePage from "./timerAndBtnsGamePage.mjs";

let mainContainer = document.getElementById("main");

export default function runGamePage(picture) {
  mainContainer.innerHTML = "";
  localStorage.setItem("game", picture[0].pictureName);

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
  generateHeaderContentGamePage(picture[0]);
  generateChatGamePage();
  generateGridGamePage(picture);
  generateTimerAndBtnGamePage(picture[0].pictureName);
}
