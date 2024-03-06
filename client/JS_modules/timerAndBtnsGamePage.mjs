import startPage from "./startPage.mjs";
// import showOriginal
// import finishGame

export default function generateTimerAndBtnGamePage() {

  const timerAndBtnContainer = document.getElementById("timerAndBtnContainer");

  const displayTimer = document.createElement("p");
  displayTimer.innerHTML = "00:00" // pictureTime från game objektet sen, har bara 00:00 nu som exempel.

  const showOriginalBtn = document.createElement("button");
  showOriginalBtn.textContent = "Show Original";
  const finishGameBtn = document.createElement("button");
  finishGameBtn.textContent = "Finish Game";
  const leaveBtn = document.createElement("button");
  leaveBtn.textContent = "LEAVE";


  // showOriginalBtn.addEventListener("click", () => { showOriginal() })
  // finishGameBtn.addEventListener("click", () => { finishGame() })
  leaveBtn.addEventListener("click", () => { startPage() })


  timerAndBtnContainer.append(displayTimer, showOriginalBtn, finishGameBtn, leaveBtn)
};