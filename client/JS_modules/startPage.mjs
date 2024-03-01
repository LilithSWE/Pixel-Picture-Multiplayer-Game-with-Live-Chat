// import logout from logout
// import createChatroom from createChatroom
// import enterChatroom from enterChatroom
import { io } from "socket.io-client";

const socket = io("https://squid-app-cg7rw.ondigitalocean.app/");
let HTMLContainer = document.getElementById("HTMLContainer"); // Where we render all HTML in index.html

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

export default function startPage(userId) {
    let startPageContainer = document.createElement("div");
    startPageContainer.classList.add("start-page-container"); // For CSS
    let startPageBtnContainer = document.createElement("div");
    startPageBtnContainer.classList.add("start-page-btn-container"); // For CSS
    const logOutBtn = document.createElement("button");
    const createChatroomBtn = document.createElement("button");
    const chatrooms = document.createElement("div");

    // logOutBtn.addEventListener("click", logOut());
    // createChatroomBtn.addEventListener("click", createChatroom())

    socket.on("getChatrooms", (chatroomArray) => {
        if (chatroomArray.chatroom) { // If there are any chatrooms (where?)

            chatroomArray.forEach(chatroomName => { // Loop trough all existing chatrooms
                let li = document.createElement("li");
                li.innerText = chatroomName.chatroom;
                let enterChatroomBtn = document.createElement("button");
                enterChatroomBtn.textContent = "Enter Chatroom";
                li.appendChild(enterChatroomBtn);
                chatrooms.appendChild(li);

                // enterChatroomBtn.addEventListener("click", () => { // Call on function for entering specific chatroom (provide id or name of room)
                //     enterChatroom(chatroomName.chatroom);
                // })
            });

        } else {
            console.log("No chatrooms available");
        }
    })



    HTMLContainer = "";
    startPageBtnContainer.append(logOutBtn, createChatroomBtn); // Puts buttons in a separate container
    startPageContainer.append(startPageBtnContainer, chatrooms); // Puts the button container and all the chatrooms in container for all content
    HTMLContainer.appendChild(startPageContainer); // Puts all content in the index.html-container


}