import generateColor from "./generateColor.mjs";

export default function generateHeaderContentGamePage(picture) {

  const playerInfoContainer = document.getElementById("playerInfoContainer");
  const userName = localStorage.getItem("userName")

  generateColor(picture);

  const color = localStorage.getItem("color");

  const playerName = document.createElement("p");
  playerName.setAttribute("id", "playerName");
  const playerColor = document.createElement("div")
  playerColor.setAttribute("style", "background-color:" + color + "; height: 10px; " + "width: 10px; ");
  playerName.innerHTML = "Player: " + userName + " Color: ";
  playerInfoContainer.append(playerName, playerColor)
};