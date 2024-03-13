import generateHeaderContentGamePage from "./headerContentGamePage.mjs";
import generateChatGamePage from "./chatGamePage.mjs";
import generateGridGamePage from "./gridGamePage.mjs";
import generateTimerAndBtnGamePage from "./timerAndBtnsGamePage.mjs";

let mainContainer = document.getElementById("main");

export default function runGamePage(picture) {
  mainContainer.innerHTML = "";
  mainContainer.classList.add("flex", "gap-3", "mt-14"); //Tailwind classes
  localStorage.setItem("game", picture[0].pictureName);

  // Creates all containers for various containers + gives them an id for later targeting. 
  const playerInfoContainer = document.createElement("header");
  playerInfoContainer.setAttribute("id", "playerInfoContainer");
  playerInfoContainer.classList.add("absolute", "top-0", "right-40"); //Tailwind classes

  const chatContainer = document.createElement("div");
  chatContainer.setAttribute("id", "chatContainer");
  chatContainer.classList.add("flex", "flex-col", "items-center", "bg-gray-100", "rounded-[6rem]", "border-solid", "border", "w-[30%]", "font-inter");  //Tailwind classes

  const gridContainer = document.createElement("div");
  gridContainer.setAttribute("id", "gridContainer");
  gridContainer.classList.add("flex", "items-center", "justify-center", "bg-gray-100", "rounded-[6rem]", "border-solid", "border", "w-[60%]", "h-[800px]"); //Tailwind classes

  const timerAndBtnContainer = document.createElement("div");
  timerAndBtnContainer.setAttribute("id", "timerAndBtnContainer");
  timerAndBtnContainer.classList.add("w-[10%]", "flex", "flex-col", "justify-center", "items-center", "gap-4");

  mainContainer.append(playerInfoContainer, chatContainer, gridContainer, timerAndBtnContainer)

  // Functions that generates the html + connects to the necessary functions used to run them.
  generateHeaderContentGamePage(picture[0]);
  generateChatGamePage();
  generateGridGamePage(picture);
  generateTimerAndBtnGamePage(picture[0].pictureName);
}
