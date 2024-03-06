// Vi tar emot ALLA sparade spels {pictureName} 

import logOut from "./logOut.mjs";
// import continueGame from 
// import startNewGame from  

import { io } from "socket.io-client";
const socket = io("http://localhost:3000"); //https://squid-app-cg7rw.ondigitalocean.app/
let mainContainer = document.getElementById("main");

export default function startPage() {
    mainContainer.innerHTML = "";

    const headlineH2 = document.createElement("h2");
    headlineH2.textContent = "GAME RULES";
    const gameRulesP = document.createElement("p");
    gameRulesP.textContent = "Rules/ How to play...";

    const savedGamesContainer = document.createElement("div");
    savedGamesContainer.classList.add("savedGamesContainer"); // For CSS
    const startPageBtnContainer = document.createElement("div");
    startPageBtnContainer.classList.add("startPageBtnContainer"); // For CSS

    const logOutBtn = document.createElement("button");
    logOutBtn.textContent = "Log out";
    const startGameBtn = document.createElement("button");
    startGameBtn.textContent = "START GAME";
    // Add the following eventlistners once the functions are written .... 
    logOutBtn.addEventListener("click", logOut());
    // startGameBtn.addEventListener("click", startNewGame())

    socket.emit("getSavedGames"); // Call on all potentially saved games when the startPage loads

    // Listens after the "getSavedGames" event
    socket.on("getSavedGames", (savedGames) => {
        savedGamesContainer.innerHTML = "";  // Empties the big container so we don't get doubles 

        savedGames.forEach(game => {
            if (savedGames) {
                const singleSavedGameContainer = document.createElement("div");
                savedGamesContainer.classList.add("singleSavedGameContainer"); // For CSS

                const pictureName = document.createElement("h4");
                pictureName.textContent = game.pictureName;

                let continueGameBtn = document.createElement("button");
                continueGameBtn.textContent = "Continue";
                // Ändra så att vi kallar på det sparade spelet om vi trycker på knappen!!! 
                /* continueGameBtn.addEventListener("click", () => { 
                    continueGame(game.pictureName);
                }) */

                singleSavedGameContainer.append(pictureName, continueGameBtn);
                savedGamesContainer.append(singleSavedGameContainer);

            } else {
                console.log("No saved games available");
            }
        });
    })
    // Puts all saved games individual containers in on big container
    startPageBtnContainer.append(logOutBtn, startGameBtn); // Puts main buttons in a separate container
    mainContainer.append(headlineH2, gameRulesP, savedGamesContainer, startPageBtnContainer); // Puts the button container and all the chatrooms in container for all content
}