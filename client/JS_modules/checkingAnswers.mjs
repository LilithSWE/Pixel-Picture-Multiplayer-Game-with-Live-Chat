let currentgame = getCurrentgame();
let postionOfCurrentGameInFacit = getFacitAnswers();

function compareGridImage(currentgameObject, keyfacitObject) {
  const currentGame = currentgameObject[0];
  const keyfacit = keyfacitObject[0];
  let amountOfGrid = 0;
  let amountOfRight = 0;

  currentGame.forEach((currentObj) => {
    keyfacit.forEach((facitObj) => {
      if (currentObj.pictureCoordinate === facitObj.pictureCoordinate) {
        amountOfGrid++;
        if (currentObj.pictureColor === facitObj.pictureColor) {
          amountOfRight++;
        }
      }
    });
  });

  let percentageRight = Math.floor((amountOfRight / amountOfGrid) * 100);
  console.log(`Du hade ${percentageRight}% rätt`);
}
