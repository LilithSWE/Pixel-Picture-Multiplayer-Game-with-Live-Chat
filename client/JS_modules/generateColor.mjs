import { socket } from "./socket.mjs"

export default function generateColor(picture) {
    let newPictureColors = picture[0].pictureColors;

    localStorage.setItem("color", newPictureColors[0]);
    newPictureColors.shift();

    socket.emit("updateColorArray", (picture[0].pictureName));
}
