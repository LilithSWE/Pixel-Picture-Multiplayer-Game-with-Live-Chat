import startPage from "./startPage.mjs";
import timer from "./timerStart.mjs";
import showOriginalPopUp from "./showOriginalPopUp.mjs";
import facitPopup from "./facitPopup.mjs";
// import finishGame


export default function generateTimerAndBtnGamePage(pictureName) {

  const timerAndBtnContainer = document.getElementById("timerAndBtnContainer");

  const displayTimerContainer = document.createElement("div");
  displayTimerContainer.setAttribute("id", "displayTimerContainer");

  const showOriginalBtn = document.createElement("button");
  showOriginalBtn.textContent = "Show Original";
  const finishGameBtn = document.createElement("button");
  finishGameBtn.textContent = "Finish Game";
  const leaveBtn = document.createElement("button");
  leaveBtn.textContent = "LEAVE";


  showOriginalBtn.addEventListener("click", () => {
    showOriginalPopUp(pictureName);
  });


  finishGameBtn.addEventListener("click", () => {
    timer("stop"); // Stannar timern
    facitPopup(displayTimerContainer.textContent);
  })
  leaveBtn.addEventListener("click", () => {
    timer("stop"); // Stannar timern
    startPage()
  })

  timerAndBtnContainer.append(displayTimerContainer, showOriginalBtn, finishGameBtn, leaveBtn)
};