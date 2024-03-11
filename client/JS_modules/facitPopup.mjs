// import continueGame
import startPage from "./startPage.mjs";
import timer from "./timerStart.mjs";

let mainContainer = document.getElementById("main");

export default function facitPopup(time, percent) { // Added incoming parameter for score percent!
    
    const facitPopupDialog = document.createElement("dialog");
    const scoreHeader = document.createElement("h2");
    scoreHeader.innerText = "Score"
    const scoreText = document.createElement("p");
    let scorePercent = document.createElement("span");
    scorePercent.textContent = percent + "%";
    scoreText.textContent = "Great job! You got ";
    const totalTime = document.createElement("p");
    totalTime.innerText = "Time taken: " + time;
    const originalPictureContainer = document.createElement("div");
    const newPictureContainer = document.createElement("div");
    const btnContainer = document.createElement("div");
    const playAgainBtn = document.createElement("button");
    playAgainBtn.textContent = "Play again";
    const continueBtn = document.createElement("button");
    continueBtn.textContent = "Continue";
    const quitGameBtn = document.createElement("button");
    quitGameBtn.textContent = "Quit";

    playAgainBtn.addEventListener("click", () => {
        // resetGame()
        facitPopupDialog.close()
        timer("reset")
    }); // Reset same game
    continueBtn.addEventListener("click", () => { // Continue playing
        facitPopupDialog.close()
        timer("start")
    });
    quitGameBtn.addEventListener("click", () => { // Back to startPage for selecting new or existing game
        facitPopupDialog.close()
        startPage()
    });

    scoreText.appendChild(scorePercent);
    let scoreTextSecond = document.createTextNode(" correct.");

    let colorMap = {
        "0-50": "red",
        "51-80": "orange",
        "81-95": "yellow",
        "96-100": "green"
    }

    let color;  // Set color to correct color depending on value
    if (percent >= 0 && percent <= 50) {
        color = colorMap["0-50"];
    } else if (percent >= 51 && percent <= 80) {
        color = colorMap["51-80"];
    } else if (percent >= 81 && percent <= 95) {
        color = colorMap["81-95"];
    } else if (percent >= 96 && percent <= 100) {
        color = colorMap["96-100"];
    } else {
        color = "black"
    }

    scorePercent.style.color = color; // Add color from map to span

    scoreText.appendChild(scoreTextSecond);
    btnContainer.append(playAgainBtn, continueBtn, quitGameBtn);
    facitPopupDialog.append(scoreHeader, scoreText, totalTime, originalPictureContainer, newPictureContainer, btnContainer);
    mainContainer.appendChild(facitPopupDialog);

    facitPopupDialog.showModal();

}