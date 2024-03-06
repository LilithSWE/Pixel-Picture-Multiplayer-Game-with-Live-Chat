// import continueGame
import startPage from "./startPage.mjs";

let mainContainer = document.getElementById("main");

export default function facitPopup() {
    const facitPopupDialog = document.createElement("dialog");
    const scoreHeader = document.createElement("h2");
    scoreHeader.innerText = "Score"
    const scorePercent = document.createElement("p");
    scorePercent.innerText = "Great job! You got " + 80 + "% correct"
    const totalTime = document.createElement("p");
    totalTime.innerText = "Time taken: " + 4.00 + "min"
    const originalPictureContainer = document.createElement("div");
    const newPictureContainer = document.createElement("div");
    const btnContainer = document.createElement("div");
    const playAgainBtn = document.createElement("button");
    playAgainBtn.textContent = "Play again";
    const continueBtn = document.createElement("button");
    continueBtn.textContent = "Continue";
    const quitGameBtn = document.createElement("button");
    quitGameBtn.textContent = "Quit";

    // playAgainBtn.addEventListener("click", continueGame()); // Reset same game
    continueBtn.addEventListener("click", () => { // Continue playing
        facitPopupDialog.close()
    });
    quitGameBtn.addEventListener("click", () => { // Back to startPage for selecting new or existing game
        facitPopupDialog.close()
        startPage()
    });

    btnContainer.append(playAgainBtn, continueBtn, quitGameBtn);
    facitPopupDialog.append(scoreHeader, scorePercent, totalTime, originalPictureContainer, newPictureContainer, btnContainer);
    mainContainer.appendChild(facitPopupDialog);

    facitPopupDialog.showModal();

}