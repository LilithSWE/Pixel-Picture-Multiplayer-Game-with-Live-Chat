import resetPictureColors from "./resetPictureColors.mjs";

export default function checkIfReloaded() {
  let game = localStorage.getItem("game");
  if (game) {
    resetPictureColors(game)
  }
}