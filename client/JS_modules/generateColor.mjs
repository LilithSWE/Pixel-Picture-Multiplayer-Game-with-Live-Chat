import { io } from "socket.io-client";
const socket = io("http://localhost:3000"); //https://squid-app-cg7rw.ondigitalocean.app/

export default function generateColor(picture) {
    let newPictureColors = picture.pictureColors;
    let color = newPictureColors[0];
    let gameName = picture.pictureName

    localStorage.setItem("color", color);
    newPictureColors.shift();

    socket.emit("updateColorArray", ({ "newPictureColors": newPictureColors, "gameName": gameName }));
}
