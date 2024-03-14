import timer from "./timerStart.mjs";
import gridGenerator from "./gridGenerator.mjs";
import { socket } from "./socket.mjs"

export default function resetGame(pictureName) {

    socket.emit("reset", (pictureName));
    socket.on("clearedPicture", (clearedPicture) => {
        console.log("clearedPicture array/ whole savefile: ", clearedPicture);
        gridGenerator(clearedPicture, "gridContainer");
    });

    timer("reset");
    timer("start");

}