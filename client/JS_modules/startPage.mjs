import logOut from "./logOut.mjs";
import runGamePage from "./runGamePage.mjs";

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
    startGameBtn.textContent = "START GAME - runGamePage";

    logOutBtn.addEventListener("click", () => { logOut() });
    startGameBtn.addEventListener("click", () => { runGamePage({ "pictureName": "Test New Game" }) }) //picture  <- Byt till rätt för NYTT SPEL

    /*
    runGamePage - Backend. 
    Skriv en socket.emit med event namn "getNewGame"
    Ta emot den arrayen som backend svara med och putta in i runGamePage(HÄR). 
    */


    // Call on all potentially saved games when the startPage loads
    socket.emit("getSavedGames");
    socket.on("getSavedGames", (savedGames) => {
        savedGamesContainer.innerHTML = "";  // Empties the big container so we don't get doubles 
        savedGames.forEach(game => {
            if (savedGames) {
                const singleSavedGameContainer = document.createElement("div");
                singleSavedGameContainer.classList.add("singleSavedGameContainer"); // For CSS
                const pictureName = document.createElement("h4");
                pictureName.textContent = game[0].pictureName;
                let continueGameBtn = document.createElement("button");
                continueGameBtn.textContent = "Continue";

                continueGameBtn.addEventListener("click", () => {
                    runGamePage(game);
                })
                singleSavedGameContainer.append(pictureName, continueGameBtn);
                savedGamesContainer.append(singleSavedGameContainer);

            } else {
                console.log("No saved games available");
            }
        });
    })

    // Puts all saved games individual containers in on big container
    startPageBtnContainer.append(logOutBtn, startGameBtn); // Puts main buttons in a separate container
    mainContainer.append(headlineH2, gameRulesP, startPageBtnContainer, savedGamesContainer); // Puts the button container and all the chatrooms in container for all content
}