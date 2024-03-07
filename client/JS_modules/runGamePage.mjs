import generateGridGamePage from './gridGamePage.mjs';
import chatGamePage from './chatGamePage.mjs';
import generateTimerAndBtnGamePage from './timerStart.mjs';

let mainContainer = document.getElementById('main');

export default function runGamePage(pictureName) {
  mainContainer.innerHTML = ''; // Tänk över hur det blir med denna om game page laddas om och chatten ev försvinner
  localStorage.setItem('game', pictureName);

  // Functions that generates the html + connects to the necessary functions used to run them.
  chatGamePage(pictureName);
  generateTimerAndBtnGamePage(); // bara en consol.log för tillfället
  generateGridGamePage(); // bara en consol.log för tillfället
}
