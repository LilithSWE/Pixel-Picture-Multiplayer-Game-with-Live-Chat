import runGamePage from './runGamePage.mjs';

export default function isGameFull(game) {
  if (game[0].pictureColors.length === 0) {
    console.log('game is full');
  } else {
    console.log('game is starting!');
    runGamePage(game);
  }
}
