import resetPictureColors from "./resetPictureColors.mjs";
import startPage from "./startPage.mjs";

export default function checkIfReloaded() {
  let pictureName = localStorage.getItem("game");
  if (pictureName) {
    resetPictureColors(pictureName)
    startPage();
  }
}