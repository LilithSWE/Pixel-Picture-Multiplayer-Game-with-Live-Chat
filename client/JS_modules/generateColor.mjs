import { socket } from "./socket.mjs"

export default function generateColor(picture) {
    let newPictureColors = picture.pictureColors;
    let color = newPictureColors[0];
    let gameName = picture.pictureName

    localStorage.setItem("color", color);
    newPictureColors.shift();

    socket.emit("updateColorArray", ({ "newPictureColors": newPictureColors, "gameName": gameName }));
}
