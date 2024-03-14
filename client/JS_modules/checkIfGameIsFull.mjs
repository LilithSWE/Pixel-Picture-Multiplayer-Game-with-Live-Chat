export default function isGameFull(colorArray, returnTo, runGame) {
  if (colorArray[0].pictureColors.length === 0) {
    console.log('return to start', colorArray[0].pictureColors.length);
    return returnTo;
  } else {
    console.log('game is starting');
    return runGame;
  }
}
