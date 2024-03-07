export default function generateHeaderContentGamePage() {
  const playerInfoContainer = document.getElementById("playerInfoContainer");
  const userName = localStorage.getItem("userName")
  // color = localStorage.getItem("color")  <-- lägg till när vi fått colors assigned
  const color = "blue"; // Byt ut mot ovan sen

  const playerName = document.createElement("p");
  playerName.setAttribute("id", "playerName");
  const playerColor = document.createElement("span")
  playerColor.innerHTML = color;
  playerColor.setAttribute("style", "color:" + color);

  playerName.innerHTML = "Player: " + userName + " Color: ";
  playerInfoContainer.append(playerName, playerColor)

};