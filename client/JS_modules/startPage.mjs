// import logout from logout
// import createChatroom from createChatroom
import singleChatroom from "./singleChatroom.mjs";
import { io } from "socket.io-client";
const socket = io("http://localhost:3000"); //https://squid-app-cg7rw.ondigitalocean.app/
let mainContainer = document.getElementById("main"); // Where we render all HTML in index.html

/**
 * startPage
 * imports logOut function from logOut
 * imports createChatroom function from createChatroom
 * imports enterChatroom function from enterChatroom
 * @param userId from localstorage when called
 * Adds container for entire page, for easier styling
 * Adds button for signing out (calls logOut function)
 * Adds container for chatrooms
 * Adds button for creating new chatroom (calls createChatroom function)
 * Appends all content in nested containers an finally in the "main" container in index.html
 */

export default function startPage() {
    mainContainer.innerHTML = "";
    let startPageContainer = document.createElement("div");
    startPageContainer.classList.add("start-page-container"); // For CSS
    let startPageBtnContainer = document.createElement("div");
    startPageBtnContainer.classList.add("start-page-btn-container"); // For CSS
    const logOutBtn = document.createElement("button");
    logOutBtn.textContent = "Logga ut";
    const createChatroomBtn = document.createElement("button");
    createChatroomBtn.textContent = "Skapa nytt chattrum";
    const chatrooms = document.createElement("div");

    // logOutBtn.addEventListener("click", logOut());
    // createChatroomBtn.addEventListener("click", createChatroom())


    socket.emit("getChatrooms");

    socket.on("getChatrooms", (savedChatroom) => {
        chatrooms.innerHTML = "";
        savedChatroom.forEach(room => {
            if (savedChatroom) { // If there are any chatrooms (where?)
                // If sats på om chatrums namnet redan finns, skriv inte ut det??? 
                // Alternativt ändra i backend så vi får en array och inte objekt. - körde på denna/V
                let li = document.createElement("li");
                li.innerText = room.chatroomName;
                let enterChatroomBtn = document.createElement("button");
                enterChatroomBtn.textContent = "Enter Chatroom";
                li.appendChild(enterChatroomBtn);
                chatrooms.appendChild(li);
                enterChatroomBtn.addEventListener("click", () => { // Call on function for entering specific chatroom (provide id or name of room)
                    singleChatroom(room.chatroomName);
                })
            } else {
                console.log("No chatrooms available");
            }
        });



    })




    startPageBtnContainer.append(logOutBtn, createChatroomBtn); // Puts buttons in a separate container
    startPageContainer.append(startPageBtnContainer, chatrooms); // Puts the button container and all the chatrooms in container for all content
    mainContainer.appendChild(startPageContainer); // Puts all content in the index.html-container


}