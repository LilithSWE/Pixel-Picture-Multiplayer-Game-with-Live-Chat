import logOut from './logOut.mjs';
import runGamePage from './runGamePage.mjs';
import isGameFull from './checkIfGameIsFull.mjs';
import killAllDialogs from "./killAllDialogs.mjs"
import { socket } from './socket.mjs';
import clearLocalStorage from './clearingLocalStorage.mjs';
import checkIfReloaded from './checkIfReloaded.mjs'

let mainContainer = document.getElementById('main');

export default function startPage() {
  checkIfReloaded()
  clearLocalStorage()
  killAllDialogs();

  let playerClicked = false;

  if (mainContainer.contains(chatContainer)) {
    mainContainer.remove(playerInfoContainer, chatContainer, gridContainer, timerAndBtnContainer);
  }
  mainContainer.innerHTML = "";


  const img = document.createElement('img');
  img.src = 'bgSplash.png';
  img.alt = 'Splashing colors';
  img.classList.add('fixed', '-z-10', 'bottom-0', 'left-0');

  const headlineH2 = document.createElement('h2');
  headlineH2.textContent = 'GAME RULES';
  headlineH2.classList.add(
    'text-center',
    'font-normal',
    'text-4xl',
    'leading-9',
    'tracking-[.3em]',
    'not-italic',
    'font-slab'
  ); //TAILWIND CLASSES

  const ruleSymbol1 = document.createElement('h2');
  const ruleSymbol2 = document.createElement('h2');
  const ruleSymbol3 = document.createElement('h2');

  ruleSymbol1.textContent = 'I';
  ruleSymbol2.textContent = 'II';
  ruleSymbol3.textContent = 'III';

  //TAILWIND CLASSES
  ruleSymbol1.classList.add(
    'font-slab',
    'font-normal',
    'text-4xl',
    'leading-9',
    'not-italic',
    'text-center'
  );
  ruleSymbol2.classList.add(
    'font-slab',
    'font-normal',
    'text-4xl',
    'leading-9',
    'not-italic',
    'text-center'
  );
  ruleSymbol3.classList.add(
    'font-slab',
    'font-normal',
    'text-4xl',
    'leading-9',
    'not-italic',
    'text-center'
  );

  const rule1 = document.createElement('p');
  const rule2 = document.createElement('p');
  const rule3 = document.createElement('p');

  rule1.textContent = "4 Players required to play. Each player gets a color to draw with"
  rule2.innerHTML = "Recreate the original picture. Try recreating the original picture by referencing the 'Show original'-button only once.<br> While players may look at the original as many times as they want, we recommend trying to complete your image with as few looks at the original as possible!";
  rule3.textContent = "Have fun!"


  //TAILWIND CLASSES
  rule1.classList.add(
    'font-slab',
    'font-normal',
    'text-xl',
    'leading-9',
    'opacity-90',
    'text-black',
    'text-center'
  );
  rule2.classList.add(
    'font-slab',
    'font-normal',
    'text-xl',
    'leading-9',
    'opacity-90',
    'text-black',
    'text-center'
  );
  rule3.classList.add(
    'font-slab',
    'font-normal',
    'text-xl',
    'leading-9',
    'opacity-90',
    'text-black',
    'text-center'
  );

  const savedGamesContainer = document.createElement('div');
  savedGamesContainer.classList.add('savedGamesContainer');
  const startPageBtnContainer = document.createElement('div');
  startPageBtnContainer.classList.add(
    'startPageBtnContainer',
    'flex',
    'flex-col',
    'items-center'
  );

  const logOutBtn = document.createElement('button');
  logOutBtn.textContent = 'LOG OUT';
  logOutBtn.classList.add(
    'bg-red-600',
    'mt-4',
    'w-48',
    'h-16',
    'rounded-full',
    'text-white',
    'hover:bg-red-700',
    'border',
    'font-inter',
    'tracking-widest'
  );

  const startGameBtn = document.createElement('button');
  startGameBtn.textContent = 'START GAME';
  startGameBtn.classList.add(
    'bg-cyan-700',
    'w-96',
    'h-16',
    'rounded-full',
    'text-white',
    'hover:bg-cyan-800',
    'border',
    'font-inter',
    'font-thin',
    'tracking-widest',
    'text-2xl'
  ); //TAILWIND CLASSES


  logOutBtn.addEventListener("click", () => { logOut() });

  startGameBtn.addEventListener("click", () => {
    socket.emit("newGame");
    playerClicked = true;
  })

  // Call on all potentially saved games when the startPage loads
  socket.emit("getSavedGames");
  socket.on("getSavedGames", (savedGames) => {
    savedGamesContainer.innerHTML = "";  // Empties the big container so we don't get doubles 
    savedGames.forEach(game => {
      if (savedGames) {
        const singleSavedGameContainer = document.createElement("div");
        singleSavedGameContainer.classList.add("singleSavedGameContainer"); // For CSS
        const pictureName = document.createElement("h4");
        pictureName.textContent = game[0].pictureName;
        let continueGameBtn = document.createElement("button");
        continueGameBtn.textContent = "Continue";

        continueGameBtn.addEventListener('click', () => {
          isGameFull(game);
          playerClicked = true;
          socket.emit("reloadAll")
        });
        singleSavedGameContainer.append(pictureName, continueGameBtn);
        savedGamesContainer.append(singleSavedGameContainer);
      } else {
        console.log('No saved games available');
      }
    });
  });

  socket.on("newGame", (newGame) => {
    if (playerClicked) {
      runGamePage(newGame);
    } else {
      startPage();
    }
  });

  socket.on("reloadAll", () => {
    if (playerClicked) {
      return;
    } else {
      if (localStorage.getItem("game")) {
        return;
      } else {
        startPage();
      }
    }
  })

  socket.on("noMoreNewGames", () => {
    startGameBtn.textContent = "SORRY, WE ARE OUT";
    console.log("No more empty gamefiles avaliable");
  })

  // Puts all saved games individual containers in on big container
  startPageBtnContainer.append(startGameBtn, logOutBtn); // Puts main buttons in a separate container
  mainContainer.append(
    img,
    headlineH2,
    ruleSymbol1,
    rule1,
    ruleSymbol2,
    rule2,
    ruleSymbol3,
    rule3,
    startPageBtnContainer,
    savedGamesContainer
  ); // Puts the button container and all the chatrooms in container for all content
}