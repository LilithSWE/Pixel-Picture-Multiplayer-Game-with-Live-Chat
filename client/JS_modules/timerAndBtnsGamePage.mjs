import startPage from "./startPage.mjs";
import timer from "./timerStart.mjs";
import showOriginalPopUp from "./showOriginalPopUp.mjs";
import facitPopup from "./facitPopup.mjs";
// import finishGame

export default function generateTimerAndBtnGamePage(pictureName) {

  const timerAndBtnContainer = document.getElementById("timerAndBtnContainer");

  const timerSymbol = document.createElement("span");
  timerSymbol.classList.add("material-symbols-outlined");
  timerSymbol.textContent = "timer";

  const displayTimerContainer = document.createElement("div");
  displayTimerContainer.setAttribute("id", "displayTimerContainer");

  const showOriginalBtn = document.createElement("button");
  showOriginalBtn.textContent = "Show Original";
  showOriginalBtn.classList.add("rounded-full", "p-4", "w-[50%]", "border-none", "font-inter", "text-white", "bg-cyan-700"); //Tailwind classes

  const finishGameBtn = document.createElement("button");
  finishGameBtn.textContent = "Finish Game";
  finishGameBtn.classList.add("rounded-full", "p-4", "w-[50%]", "border-none", "font-inter", "text-white", "bg-green-500"); //Tailwind classes

  const leaveBtn = document.createElement("button");
  leaveBtn.textContent = "LEAVE";
  leaveBtn.classList.add("rounded-full", "p-4", "w-[50%]", "border-none", "font-inter", "text-white", "bg-red-500"); //Tailwind classes


  showOriginalBtn.addEventListener("click", () => {
    showOriginalPopUp(pictureName);
  });


  finishGameBtn.addEventListener("click", () => {
    timer("stop"); // Stannar timern
    facitPopup(displayTimerContainer.textContent, 80, pictureName); // param 2 and 3 are test values
  })
  leaveBtn.addEventListener("click", () => {
    timer("stop"); // Stannar timern
    
    startPage()
  })

  timerAndBtnContainer.append(timerSymbol, displayTimerContainer, showOriginalBtn, finishGameBtn, leaveBtn)
};