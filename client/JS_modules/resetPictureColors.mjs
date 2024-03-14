import { socket } from "./socket.mjs"
// import runGamePage from "./runGamePage.mjs";
import startPage from "./startPage.mjs";

export default function resetPictureColors(pictureName) {

    socket.emit("getCurrentPicture", (pictureName));

    socket.on("getCurrentPicture", (currentPicture) => {
        console.log(currentPicture);
        //runGamePage(currentPicture);
        startPage()
    })
}   
