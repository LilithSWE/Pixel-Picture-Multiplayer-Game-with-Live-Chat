import gridGenerator from "./gridGenerator.mjs";
import { socket } from "./socket.mjs"

export default function showOriginalPopUp(pictureName) {
  let mainContainer = document.getElementById("main");

  // Close any existing dialogs before creating a new one
  const existingDialog = document.getElementById("showOriginalPopUp");
  if (existingDialog) {
    existingDialog.close();
    existingDialog.remove(); // Remove the existing dialog from the DOM
  }

  const showOriginalPopUp = document.createElement("dialog");
  showOriginalPopUp.setAttribute("id", "showOriginalPopUp");
  const keyContainer = document.createElement("div");
  keyContainer.setAttribute("id", "keyContainer");
  keyContainer.innerHTML = "";
  const headline = document.createElement("h2")
  headline.innerText = "Original Picture";
  const closeBtn = document.createElement("button");
  closeBtn.textContent = "CLOSE";
  closeBtn.addEventListener("click", () => {
    showOriginalPopUp.close()
  })

  showOriginalPopUp.append(headline, keyContainer, closeBtn);
  mainContainer.append(showOriginalPopUp);
  showOriginalPopUp.showModal();

  // Asks BE to look in key for the pictueName our current game has
  socket.emit("getKey", (pictureName));
  // Listens to the answer of the whole key array
  socket.on("getKey", (specificKey) => {
    keyContainer.innerHTML = "";
    gridGenerator(specificKey, "keyContainer")
  })
}