import startPage from './startPage.mjs';
import timer from './timerStart.mjs';
import resetPicture from './resetPicture.mjs';
import { socket } from './socket.mjs';
import gridGenerator from './gridGenerator.mjs';
import clearLocalStorage from './clearingLocalStorage.mjs';
import resetPictureColors from './resetPictureColors.mjs';
import killAllDialogs from './killAllDialogs.mjs';

let mainContainer = document.getElementById('main');

export default function facitPopup(time, percent, pictureName) {

  // Added incoming parameter for score percent and an identification for which picture
  socket.emit('displayCurrentGame', pictureName);
  socket.emit('displayKey', pictureName);

  // Added incoming parameter for score percent and an identification for which picture
  const facitPopupDialog = document.createElement('dialog');
  facitPopupDialog.setAttribute('id', 'facitPopupDialog');
  facitPopupDialog.classList.add(
    'h-[85%]',
    'w-[70%]',
    'rounded-[3rem]',
    'border-dashed',
    'flex',
    'flex-col',
    'items-center'
  ); //Tailwind classes

  const scoreHeader = document.createElement('h2');
  scoreHeader.classList.add(
    'font-slab',
    'font-normal',
    'text-4xl',
    'leading-9',
    'not-italic',
    'tracking-[0.8rem]'
  );

  scoreHeader.innerText = 'SCORE';
  const scoreText = document.createElement('p');
  let scorePercent = document.createElement('span');
  scorePercent.textContent = percent + '%';
  scoreText.textContent = 'Great job! You got ';
  const totalTime = document.createElement('p');
  totalTime.innerText = 'Time taken: ' + time;
  const originalPictureContainer = document.createElement('div');
  originalPictureContainer.setAttribute('id', 'originalPictureContainer');
  const newPictureContainer = document.createElement('div');
  newPictureContainer.setAttribute('id', 'newPictureContainer');
  const btnContainer = document.createElement('div');
  btnContainer.classList.add('flex');

  const playAgainBtn = document.createElement('button');
  playAgainBtn.textContent = 'Play again';
  playAgainBtn.classList.add(
    'rounded-full',
    'p-4',
    'w-[50%]',
    'border-none',
    'font-inter',
    'text-white',
    'bg-green-500',
    'm-4'
  ); //Tailwind classes

  const continueBtn = document.createElement('button');
  continueBtn.textContent = 'Continue';
  continueBtn.classList.add(
    'rounded-full',
    'p-4',
    'w-[50%]',
    'border-none',
    'font-inter',
    'text-white',
    'bg-cyan-700',
    'm-4'
  ); //Tailwind classes

  const quitGameBtn = document.createElement('button');
  quitGameBtn.textContent = 'Quit';
  quitGameBtn.classList.add(
    'rounded-full',
    'p-4',
    'w-[50%]',
    'border-none',
    'font-inter',
    'text-white',
    'bg-red-500',
    'm-4'
  ); //Tailwind classes

  playAgainBtn.addEventListener('click', () => {
    resetPicture(pictureName);
    socket.emit('playAgain');

  });
  continueBtn.addEventListener('click', () => {
    // Continue playing
    socket.emit('continue');
  });
  quitGameBtn.addEventListener('click', () => {
    // Back to startPage for selecting new or existing game
    resetPictureColors(pictureName);
    socket.emit('leaveGame');
  });

  // Makes sure all the buttons affect all the players
  socket.on('playAgain', () => {
    facitPopupDialog.close();
    facitPopupDialog.classList.remove(
      'h-[85%]',
      'w-[70%]',
      'rounded-[3rem]',
      'border-dashed',
      'flex',
      'flex-col',
      'items-center'
    ); //Tailwind classes
    facitPopupDialog.remove();
    killAllDialogs();
  });
  socket.on('continue', () => {
    facitPopupDialog.close();
    facitPopupDialog.classList.remove(
      'h-[85%]',
      'w-[70%]',
      'rounded-[3rem]',
      'border-dashed',
      'flex',
      'flex-col',
      'items-center'
    ); //Tailwind classes
    timer('start');
    facitPopupDialog.remove();
    killAllDialogs();
  });
  socket.on('leaveGame', () => {
    facitPopupDialog.close();
    facitPopupDialog.classList.remove(
      'h-[85%]',
      'w-[70%]',
      'rounded-[3rem]',
      'border-dashed',
      'flex',
      'flex-col',
      'items-center'
    ); //Tailwind classes
    facitPopupDialog.remove();
    timer("stop");
    clearLocalStorage();
    startPage();
    killAllDialogs();
  });

  scoreText.appendChild(scorePercent);
  let scoreTextSecond = document.createTextNode(' correct.');

  let colorMap = {
    '0-50': 'red',
    '51-80': 'orange',
    '81-95': 'yellow',
    '96-100': 'green',
  };

  let color; // Set color to correct color depending on value
  if (percent >= 0 && percent <= 50) {
    color = colorMap['0-50'];
  } else if (percent >= 51 && percent <= 80) {
    color = colorMap['51-80'];
  } else if (percent >= 81 && percent <= 95) {
    color = colorMap['81-95'];
  } else if (percent >= 96 && percent <= 100) {
    color = colorMap['96-100'];
  } else {
    color = 'black';
  }

  scorePercent.style.color = color; // Add color from map to span

  scoreText.appendChild(scoreTextSecond);
  btnContainer.append(playAgainBtn, continueBtn, quitGameBtn);
  facitPopupDialog.append(
    scoreHeader,
    scoreText,
    totalTime,
    originalPictureContainer,
    newPictureContainer,
    btnContainer
  );
  mainContainer.appendChild(facitPopupDialog);

  socket.on('displayCurrentGame', (currentGame) => {
    gridGenerator(currentGame, 'newPictureContainer');
  });
  socket.on('displayKey', (keyGame) => {
    gridGenerator(keyGame, 'originalPictureContainer');
  });

  console.log("Showing the facitPopup!");
  facitPopupDialog.showModal();
}


