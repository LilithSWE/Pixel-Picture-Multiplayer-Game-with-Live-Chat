import resetPictureColors from "./resetPictureColors.mjs";
import { socket } from "./socket.mjs";
import startPage from "./startPage.mjs";

export default function checkIfReloaded() {
  let pictureName = localStorage.getItem("game");
  if (pictureName) {
    resetPictureColors(pictureName)
    socket.emit("someoneLeftYourGame", (pictureName));
    startPage();
  }
}