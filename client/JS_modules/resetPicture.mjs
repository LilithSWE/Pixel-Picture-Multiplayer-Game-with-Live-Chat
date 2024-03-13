import timer from "./timerStart.mjs";
import gridGenerator from "./gridGenerator.mjs";
import { io } from "socket.io-client";
const socket = io("http://localhost:3000"); //https://squid-app-cg7rw.ondigitalocean.app/

export default function resetGame(pictureName) {

    socket.emit("reset", (pictureName));
    socket.on("clearedPicture", (clearedPicture) => {
        console.log("clearedPicture color: ", clearedPicture);
        gridGenerator(clearedPicture);
    });
    
    timer("reset");
    timer("start");

}