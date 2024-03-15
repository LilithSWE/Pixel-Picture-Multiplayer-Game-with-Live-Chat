
import startPage from "./startPage.mjs";
import timer from "./timerStart.mjs";
import showOriginalPopUp from "./showOriginalPopUp.mjs";
import resetPictureColors from "./resetPictureColors.mjs";
import compareGridImage from './checkingAnswers.mjs';
import clearLocalStorage from './clearingLocalStorage.mjs';
import { socket } from './socket.mjs';

let mainContainer = document.getElementById("main");

export default function generateTimerAndBtnGamePage(pictureName) {
  const timerAndBtnContainer = document.getElementById('timerAndBtnContainer');

  const timerSymbol = document.createElement('span');
  timerSymbol.classList.add('material-symbols-outlined');
  timerSymbol.textContent = 'timer';

  const displayTimerContainer = document.createElement('div');
  displayTimerContainer.setAttribute('id', 'displayTimerContainer');

  const showOriginalBtn = document.createElement('button');
  showOriginalBtn.textContent = 'Show Original';
  showOriginalBtn.classList.add(
    'rounded-full',
    'p-4',
    'w-[50%]',
    'border-none',
    'font-inter',
    'text-white',
    'bg-cyan-700'
  ); //Tailwind classes

  const finishGameBtn = document.createElement('button');
  finishGameBtn.textContent = 'Finish Game';
  finishGameBtn.classList.add(
    'rounded-full',
    'p-4',
    'w-[50%]',
    'border-none',
    'font-inter',
    'text-white',
    'bg-green-500'
  ); //Tailwind classes
  finishGameBtn.disabled = true;
  finishGameBtn.setAttribute("id", "finishGameBtn");

  const leaveBtn = document.createElement('button');
  leaveBtn.textContent = 'LEAVE';
  leaveBtn.classList.add(
    'rounded-full',
    'p-4',
    'w-[50%]',
    'border-none',
    'font-inter',
    'text-white',
    'bg-red-500'
  ); //Tailwind classes
  showOriginalBtn.addEventListener('click', () => {
    showOriginalPopUp(pictureName);
  });
  finishGameBtn.addEventListener('click', () => {
    socket.emit('finishGame');
  });
  leaveBtn.addEventListener("click", () => {
    resetPictureColors(pictureName);
    socket.emit("leaveGame");
  })

  socket.on('finishGame', () => {
    timer('stop');
    compareGridImage(pictureName);
    console.log("pictureName: ", pictureName);
  });

  socket.on("leaveGame", () => {
    timer("stop");
    clearLocalStorage();
    mainContainer.classList.remove("flex", "gap-3", "mt-14")
    startPage()
    let chatContainer = document.getElementById("chatContainer");
    let playerInfoContainer = document.getElementById("playerInfoContainer");
    let gridContainer = document.getElementById("gridContainer");
    let timerAndBtnContainer = document.getElementById("timerAndBtnContainer");
    if (mainContainer.contains(chatContainer)) {
      mainContainer.remove(playerInfoContainer, chatContainer, gridContainer, timerAndBtnContainer);
    }
  });

  timerAndBtnContainer.append(
    timerSymbol,
    displayTimerContainer,
    showOriginalBtn,
    finishGameBtn,
    leaveBtn
  );

}
