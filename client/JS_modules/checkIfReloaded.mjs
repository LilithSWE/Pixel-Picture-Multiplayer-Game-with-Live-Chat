import resetPictureColors from "./resetPictureColors.mjs";
import { socket } from "./socket.mjs";

export default function checkIfReloaded() {
  let pictureName = localStorage.getItem("game");
  if (pictureName) {
    resetPictureColors(pictureName)
    socket.emit("someoneLeftYourGame", (pictureName));
  }
}