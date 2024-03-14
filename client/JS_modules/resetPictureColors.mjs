import { socket } from "./socket.mjs"

export default function resetPictureColors(pictureName) {
    socket.emit("getCurrentPicture", (pictureName));
}   
